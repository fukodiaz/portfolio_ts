import { Router } from 'express';
import path from 'path';
import * as fs from 'fs';

const router = Router();

router.post('/', async (req, res) => {
	// const path = './server/data/db.json';
	// const path = 'data/db.json';
	
	// fs.readFile(path, (error, data) => {
	// 	if (fs.existsSync(path)) {
	// 		res.send(data.toString());
	// 	}
	// 	if (error) {
	// 		console.log(error, 44);
	// 	}
	// })

	const file = path.join(process.cwd(), 'data', 'db.json'); //add 'server' only for production
	const dataContacts = fs.readFileSync(file, 'utf8'); 
	const newDataContacts = JSON.stringify([...JSON.parse(dataContacts), req.body]);

	fs.writeFileSync(file, newDataContacts, (error) => {
		error ? console.log('error --writing file: ', error) : null
	})
	res.setHeader('Content-Type', 'application/json');
	return res.send(newDataContacts);
});

export default router;