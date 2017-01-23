import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginfoComponent } from './loginfo/loginfo.component';
import { HeaderComponent } from './header.component';




const APP_ROUTES: Routes = [
	{	path: 'nav', component: HeaderComponent},
	{ path: 'home', component: HomeComponentComponent},

	{ path: 'logs', component: LoginfoComponent},

];

export const routing = RouterModule.forRoot(APP_ROUTES);