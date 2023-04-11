import express from 'express';
import cors from 'cors';
import rewrite from 'express-urlrewrite';

import {default as contactsRouter} from './routers/contacts-router.mjs';

const app = express();
const PORT = process.env.PORT || 3000;
const corsOptions = {
	origin: 'http://localhost:8081',
	optionSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
//app.use(express.static('dist')); //for dev
//app.use(rewrite('/api/*', '/$1'));

app.use('/contacts', contactsRouter);

app.listen(PORT);

// app.get('/', (req, res) => { //for dev
// 	res.sendFile(createPath('index'));
// });

app.get('/', (req, res) => {
	res.status(200).type('text/plain');
	res.send('Home page...');
});

app.use((req, res) => {
	res
		.status(404)
		.send('<h1>Error! Something wrong happened ..!</h1>')
});

export default app;