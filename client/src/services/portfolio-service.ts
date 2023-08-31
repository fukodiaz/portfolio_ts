import { TypeContacts } from './types';

export default class PortfolioService {
	//private apiBase='https://portfolio-api-theta-mocha.vercel.app';
	//private apiBase='http://localhost:8888';
	private apiBase='https://portfolio-api-9jlv.onrender.com';

	postData = async (url: string, data: any): Promise<any> => {
		console.log(data, 444)
		const res = await fetch(`${this.apiBase}${url}`, {
			mode: 'cors',
			//credentials: "include",
			method: 'POST',
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-type': 'application/json'
			},
			body: data
		});
	
		return res.json();
	}

	postDataContacts = async (json: TypeContacts): Promise<TypeContacts> => {
		const res = await this.postData('/contacts', json)
		return res
	}

}