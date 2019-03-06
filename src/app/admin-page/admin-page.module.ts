import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminMaterialModule } from './admin-material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminPageComponent } from './admin-page.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { MenusComponent } from './menus/menus.component';
import { PostsComponent } from './posts/posts.component';
import { ConfirmationDialogComponent } from './shared/confirmation-dialog/confirmation-dialog.component';
import { EditMenuComponent } from './menus/edit-menu/edit-menu.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';

@NgModule({
  declarations: [
  	DashboardComponent,
  	AdminPageComponent,
  	AppNavbarComponent,
  	MenusComponent,
  	PostsComponent,
  	ConfirmationDialogComponent,
  	EditMenuComponent,
  	EditPostComponent,
  	AppSidebarComponent
  ],
  imports: [
    CommonModule,
    AdminMaterialModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    ConfirmationDialogComponent,
    EditMenuComponent,
    EditPostComponent
  ]
})

export class AdminPageModule { }
