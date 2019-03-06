import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrontPageComponent } from './front-page.component';
import { PageListComponent } from './page-list/page-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PagesComponent } from './pages/pages.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
	{
		path: '',
		component: FrontPageComponent,
		children: [
			{
				path: '',
				component: HomePageComponent,
			},
			{
				path: 'article',
				component: PageListComponent
			},
			{
				path: 'pages/:url',
				component: PagesComponent
			},
			{
				path: 'login',
				component: LoginPageComponent
			},
			{
				path: '**',
				redirectTo: 'home',
			}
		]
	}
];

@NgModule({
  imports: [
  	RouterModule.forChild(routes)
  ],
  exports: [
  	RouterModule
  ]
})

export class FrontRoutingModule { }
