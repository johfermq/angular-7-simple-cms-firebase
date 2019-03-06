import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './../../services/authentication/authentication.service';

import { User } from './../../interfaces/user';
import { Menu } from './../../interfaces/menu';

@Component({
  selector: 'front-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.scss']
})

export class AppSidebarComponent implements OnInit {

	@Input('menus') menus: Menu[];
  	@Input('user') public user: User;

	constructor(private authentication: AuthenticationService, private router: Router) {}

	ngOnInit() {

	}

	login() {
		this.authentication.loginWithGoogle();
	}

	logout() {
		this.authentication.logout().then(() => this.router.navigate(['/home']));
	}

}
