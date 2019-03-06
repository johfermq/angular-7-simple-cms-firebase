import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './../../services/authentication/authentication.service';

import { User } from './../../interfaces/user';
import { Menu } from './../../interfaces/menu';

@Component({
  selector: 'front-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss']
})

export class AppNavbarComponent implements OnInit {

  @Input('title') public title: string;
  @Input('menus') public menus: Menu[];
  @Input('user') public user: User;
  @Output() public navbarSidebar = new EventEmitter<boolean>();

	constructor(private authentication: AuthenticationService, private router: Router) {}

  ngOnInit() {

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
