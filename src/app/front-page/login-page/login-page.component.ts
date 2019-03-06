import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './../../services/authentication/authentication.service';

import { User } from './../../interfaces/user';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {

  user: User;

	constructor(private authentication: AuthenticationService) {}

	ngOnInit() {
  	this.authentication.user$.subscribe(user => this.user = user);
	}

	login() {
		this.authentication.loginWithGoogle();
	}

}
