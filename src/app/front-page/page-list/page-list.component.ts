import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})

export class PageListComponent implements OnInit {

	pages: Observable<any[]>;
	masonry: NgxMasonryOptions = {
	    gutter: 10,
	    horizontalOrder: true,
	    percentPosition: true
	};

	constructor(private db: AngularFireDatabase) { }

	ngOnInit() {
		this.pages = this.getPages('/pages');
	}

	getPages(path): Observable<any[]> {
		return this.db.list(path).valueChanges();
	}

}
