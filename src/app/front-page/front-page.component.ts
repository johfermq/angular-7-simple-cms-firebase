import { Component, OnInit } from '@angular/core';

import { environment } from './../../environments/environment';

import { MenusService } from './../services/menus/menus.service';
import { AuthenticationService } from './../services/authentication/authentication.service';

import { User } from './../interfaces/user';
import { Menu } from './../interfaces/menu';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})

export class FrontPageComponent implements OnInit {

	title: string;
	user: User;
  	menus: Menu[];

	constructor(
		private authentication: AuthenticationService,
		private menusService: MenusService
	) {
		this.title = environment.title;
	}

	ngOnInit() {
    	this.menusService.getMenus().subscribe((data: any) => this.menus = data);
    	this.authentication.user$.subscribe(user => this.user = user);
	}

}
