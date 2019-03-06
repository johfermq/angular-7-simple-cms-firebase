import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
	{
		path: 'home',
		loadChildren: './front-page/front-page.module#FrontPageModule',
	},
	{
		path: 'admin',
		loadChildren: './admin-page/admin-page.module#AdminPageModule',
		canActivate: [AdminGuard]
	},
  	{
    	path: '**',
    	redirectTo: 'home',
    	pathMatch: 'full'
  	}
];

@NgModule({
  imports: [
  	RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
