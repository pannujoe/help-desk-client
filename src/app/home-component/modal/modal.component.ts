import {Component, ViewEncapsulation } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal',
  templateUrl: './modal.component.html',
  encapsulation: ViewEncapsulation.None

})
export class NgbdModalclass {
  closeResult: string;

  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

}
