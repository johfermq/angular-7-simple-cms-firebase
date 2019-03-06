import { Component, OnInit } from '@angular/core';

import { environment } from './../../environments/environment';

import { AuthenticationService } from './../services/authentication/authentication.service';

import { User } from './../interfaces/user';

@Component({
  selector: 'admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})

export class AdminPageComponent implements OnInit {

	title: string;
	user: User;

	constructor(private authentication: AuthenticationService) {
		this.title = environment.title;
	}

	ngOnInit() {
		this.authentication.user$.subscribe(user => this.user = user);
	}

}
