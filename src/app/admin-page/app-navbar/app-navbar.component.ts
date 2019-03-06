import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './../../services/authentication/authentication.service';

import { User } from './../../interfaces/user';

@Component({
  selector: 'admin-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss']
})

export class AppNavbarComponent implements OnInit {

  @Input('title') public title: string;
  @Output() public navbarSidebar = new EventEmitter<boolean>();

  user: User;

	constructor(private authentication: AuthenticationService, private router: Router) {}

	ngOnInit() {
  	this.authentication.user$.subscribe(user => this.user = user);
	}

	login() {
		this.authentication.loginWithGoogle();
	}

	logout() {
		this.authentication.logout().then(() => this.router.navigate(['/home']));
	}

  openSidebar() {
    this.navbarSidebar.emit(true);
  }

}
