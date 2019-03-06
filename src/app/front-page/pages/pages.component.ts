import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxMasonryOptions } from 'ngx-masonry';

import { Menu } from './../../interfaces/menu';
import { Post } from './../../interfaces/post';
import { MenusService } from './../../services/menus/menus.service';
import { PostsService } from './../../services/posts/posts.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})

export class PagesComponent implements OnInit {

	menu: Menu;
	posts: Post[];
  masonry: NgxMasonryOptions = {
    gutter: 10,
    horizontalOrder: true,
    percentPosition: true
  };

  	constructor(
  		private route: ActivatedRoute,
  		private menusService: MenusService,
  		private postsService: PostsService
  	) {
  		this.route.params.subscribe(params => {

  			this.menusService.filterMenus('url', '==', params.url).subscribe(menus =>
  			{
  				if (menus.length > 0)
  				{
  					this.menu = menus[0];

		  			this.postsService.filterPosts('menu_id', '==', this.menu.id).subscribe(posts => {
		  				this.posts = posts;
		  			});
  				}
  			});

  		});
  	}

  	ngOnInit() {
  	}

}
