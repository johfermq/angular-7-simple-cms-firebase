import { Component, OnInit, AfterViewInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

import { ConfirmationDialogComponent } from './../shared/confirmation-dialog/confirmation-dialog.component';
import { EditPostComponent } from './edit-post/edit-post.component';

import { Post } from './../../interfaces/post';
import { Menu } from './../../interfaces/menu';
import { PostsService } from './../../services/posts/posts.service';
import { MenusService } from './../../services/menus/menus.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit, AfterViewInit {

  menus: Menu[];

	dataSource = new MatTableDataSource<Post>();
	displayedColumns: string[] = ['id', 'title', 'content', 'menu_id', 'actions'];

  postForm: FormGroup;

	@ViewChild(MatSort) sort: MatSort;
	@ViewChild(MatPaginator) paginator: MatPaginator;

	constructor(
    private menusService: MenusService,
    private postsService: PostsService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    // public breakpointObserver: BreakpointObserver
  ) {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      menu_id: ['', Validators.required]
    });

    // breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
    //   this.displayedColumns = result.matches ?
    //       ['title', 'content', 'actions'] :
    //       ['id', 'title', 'content', 'menu_id', 'actions'];
    // });
  }

	ngOnInit() {
    this.menusService.getMenus().subscribe((data: any) => this.menus = data);
		this.postsService.getPosts().subscribe((data: any) => this.dataSource.data = data);
	}

	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
	  this.dataSource.sort = this.sort;
	}

	searchPosts(filterValue: string) {
  	this.dataSource.filter = filterValue.trim().toLowerCase();
	}

  addPost() {
    this.postsService.addPost(this.postForm.value).then(() => {
      this.postForm.reset();
    });
  }

  updatePost(postId, post: Post) {
    this.postsService.updatePost(postId, post);
  }

  deletePost(postId) {
    this.postsService.deletePost(postId);
  }

  openDialog(postId): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result === 'true') this.deletePost(postId);
    });
  }

  openEditDialog(post: Post): void {
    const dialogRef = this.dialog.open(EditPostComponent, {
      width: '700px',
      data: { ...post, menus: this.menus }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== 'false') this.updatePost(post.id, result);
    });
  }

}