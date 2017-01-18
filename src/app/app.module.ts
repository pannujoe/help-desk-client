import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


//components
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { HeaderComponent } from './header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginfoComponent } from './loginfo/loginfo.component';


//Routing!!!
import { routing } from './app.routing';

//services
import { HomeServices } from './user-service.service';

//bootstrap

import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalclass } from './home-component/modal/modal.component';
import { FilterPipe } from './loginfo/filter.pipe';


import { Ng2FilterPipeModule } from 'ng2-filter-pipe';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    HeaderComponent,
		NgbdModalclass,
		LoginfoComponent,
		FilterPipe,



  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
		routing,
		NgbModule.forRoot(),
		ReactiveFormsModule,
		Ng2FilterPipeModule

  ],

	providers: [ HomeServices ],
  bootstrap: [AppComponent]
})
export class AppModule { }
