import { Component, OnInit,  ViewEncapsulation, Pipe } from '@angular/core';
import {Observable} from 'rxjs/Rx';
// import { FilterPipe } from './filter.pipe';
import * as _ from 'underscore';
import { Log } from './log'

//services

import { HomeServices} from '../user-service.service';

@Component({
  selector: 'app-loginfo',
  templateUrl: './loginfo.component.html',


})
export class LoginfoComponent implements OnInit {
	log: Log = {};
	logs: Log[] = [];
	original: Log[] = [];
	//filter: any = [];

  constructor(private homeService: HomeServices) {	}

  ngOnInit() {
		this.getLog();
	}

	// getLog() {

	// 	this.homeService.getLogInfo()
	//     	.subscribe(log => {
	// 					this.logs = log;
	//         	this.original = log;
	//       });

	// }

		getLog() {

		this.homeService.getLogInfo()
	    	.subscribe(log => {
						this.logs = log;
	        	this.original = log;
	      });
	}

 	// filterByLog(filter) {
	// 	 if(filter.fName && !filter.reasonName && !filter.contactName && !filter.positionName) {

	// 		this.logs = _.filter(this.original, log => log.fName === filter.fName);

	// 	 }

	// 	 	else if(filter.fName && filter.reasonName && !filter.contactName && !filter.positionName) {

	// 		this.logs = _.filter(this.original, log => log.fName === filter.fName && log.reasonName === filter.reasonName);
	// 	 }

	// 	 	else if(filter.fName && filter.reasonName && filter.contactName && !filter.positionName) {

	// 		this.logs = _.filter(this.original, log => log.fName === filter.fName && log.reasonName === filter.reasonName && log.contactName === filter.contactName);
	// 	 }

	// 	 		else if(!filter.fName && filter.reasonName && filter.contactName && !filter.positionName) {

	// 		this.logs = _.filter(this.original, log => log.reasonName === filter.reasonName && log.contactName === filter.contactName);
	// 	 }


	// }


 	filterByLog(filter) {
		 if(filter.fName && !filter.reasonName && !filter.contactName && !filter.positionName) {
			this.logs = _.filter(this.original, log => log.fName === filter.fName);
		 	}
			 else if(filter.fName && filter.reasonName && !filter.contactName && !filter.positionName) {
					this.logs = _.filter(this.original, log => log.fName === filter.fName && log.reasonName === filter.reasonName);
					}
				else if(filter.fName && filter.reasonName && !filter.contactName && !filter.positionName) {
					this.logs = _.filter(this.original, log => log.fName === filter.fName && log.reasonName === filter.reasonName);
					}
						else if(filter.fName && filter.reasonName && filter.contactName && !filter.positionName) {
							this.logs = _.filter(this.original, log => log.fName === filter.fName && log.reasonName === filter.reasonName && log.contactName === filter.contactName);
							}
								else if(!filter.fName && filter.reasonName && filter.contactName && !filter.positionName) {
									this.logs = _.filter(this.original, log => log.reasonName === filter.reasonName && log.contactName === filter.contactName);
									}
							}


/*	filterByPosition(positionName) {
			this.log = _.filter(this.original, positions =>  positions.positionName === positionName)
	}

	filterByReason(reasonName) {
			this.log = _.filter(this.original, reasons =>  reasons.positionName === reasonName)
	}
*/


}