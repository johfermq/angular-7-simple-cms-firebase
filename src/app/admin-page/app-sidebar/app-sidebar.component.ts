import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './../../services/authentication/authentication.service';

import { User } from './../../interfaces/user';

@Component({
  selector: 'admin-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.scss']
})

export class AppSidebarComponent implements OnInit {

	@Input('user') public user: User;

    links: any[] = [
	    {
	      	name: 'Dashboard',
	      	link: '/admin/dashboard',
	    },
	    {
	      	name: 'Menus',
	      	link: '/admin/menus',
	    },
	    {
	      	name: 'Posts',
	      	link: '/admin/posts',
	    }
	];

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
