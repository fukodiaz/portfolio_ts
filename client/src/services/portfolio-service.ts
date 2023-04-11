import { TypeContacts } from './types';

export default class PortfolioService {
	readonly apiBase='http://localhost:3001'

	postData = async (url: string, data: any): Promise<any> => {
		const res = await fetch(`${this.apiBase}${url}`, {
			mode: 'cors',
			//credentials: "include",
			method: 'POST',
			headers: {
				'Access-Control-Allow-Origin': '*',
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