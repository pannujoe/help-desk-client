import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable, Operator} from 'rxjs/Rx';
import 'rxjs/Rx';

import { DataService } from './dataservice';


@Injectable()
export class HomeServices extends DataService {

  constructor(private http: Http) {
		super(http);
	}

//getting User data to populate in Form
	getUsers() {
		return this.getData('users/list');
	}

	getReasons() {
		return this.getData('reasons/list');
	}

	getPositions() {
		return this.getData('positions/list');
	}

	getLogInfo() {
		return this.getData('logs/getLogInfo')
	}



//Posting data to server

	addForm(item) {
		return this.postData('logs/add', item)

	}



}



