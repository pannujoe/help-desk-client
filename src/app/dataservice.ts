import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, Operator } from 'rxjs/Rx';
import 'rxjs/Rx';

export class DataService {

	constructor(private parentHttp: Http) { }
// GetData
//Get SQL Info
	extractData(response: Response) {
		return <any[]>response.json().data;
	}


	private checkData(res: Response) {
    let body;

// check if empty, before call json
    if (res.text()) {
        body = res.json();
    }

    return body || {};
}

	getData(url: string) {
		return this.parentHttp.get(`http://localhost:22246/api/${url}`)
						.map(this.extractData);
	}

	postData(url: string, body: Object){
		return this.parentHttp.post(`http://localhost:22246/api/${url}`, body)
								.map(this.checkData);
	}

}


