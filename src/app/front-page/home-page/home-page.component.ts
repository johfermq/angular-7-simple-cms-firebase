import { Component, OnInit } from '@angular/core';

import { environment } from './../../../environments/environment';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  	title: string;

  	constructor() {
  		this.title = environment.title;
  	}

  	ngOnInit() {
  	}

}
