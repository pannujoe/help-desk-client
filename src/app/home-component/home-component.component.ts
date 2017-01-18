import { Component, OnInit,  ViewEncapsulation } from '@angular/core';
import {Observable} from 'rxjs/Rx';

//services'
import { HomeServices} from '../user-service.service';
//bootstrap
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalclass } from '../home-component/modal/modal.component';



@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

	model: number = 1;
	users: any[] = [];
	reasons: any[] = [];
	positions: any[] = [];
	log: any = {};

  constructor(
		private homeService: HomeServices,
		private modalService: NgbModal,

		){	}

  ngOnInit() {
		// this.homeService.getUsers().subscribe(users => this.users = users)
		// this.homeService.getReasons().subscribe(reasons => this.reasons = reasons)


		this.homeService.getUsers()
    	.subscribe(
      	users=> {
        	this.users = users;
        	this.homeService.getReasons().subscribe(
          	reasons=> {
            	this.reasons = reasons;
							this.homeService.getPositions().subscribe(
          			positions=> {
            		this.positions = positions;
							});
          	});
      	});
	}

	addForm(form) {
		this.homeService.addForm(form).subscribe(rsp => console.log(rsp));
	}

	 open(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

}



