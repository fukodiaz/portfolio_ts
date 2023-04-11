import { Router } from 'express';
import path from 'path';
import * as fs from 'fs';

const router = Router();

router.post('/', async (req, res) => {
	const file = path.join(process.cwd(), 'data', 'db.json'); //add 'server' only for production
	const dataContacts = fs.readFileSync(file, 'utf8'); 
	const novelObjContacts = {
		...req.body,
		id: new Date().getTime() / 1000
	}
	const newDataContacts = JSON.stringify([...JSON.parse(dataContacts), novelObjContacts]);
	console.log(newDataContacts, 88)
	console.log(novelObjContacts, 777)

	fs.writeFileSync(file, newDataContacts, (error) => {
		error ? console.log('error --writing file: ', error) : null
	})
	res.setHeader('Content-Type', 'application/json');
	return res.send(novelObjContacts);
});

export default router;