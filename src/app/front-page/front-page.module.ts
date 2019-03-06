import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontMaterialModule } from './front-material.module';

import { PageListComponent } from './page-list/page-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FrontPageComponent } from './front-page.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { PagesComponent } from './pages/pages.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { LoginPageComponent } from './login-page/login-page.component';

import { FrontRoutingModule } from './front-routing.module';

@NgModule({
  declarations: [
    PageListComponent,
    HomePageComponent,
    FrontPageComponent,
    AppNavbarComponent,
    PagesComponent,
    AppSidebarComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    FrontRoutingModule,
    FrontMaterialModule
  ],
  entryComponents: [
  ]
})

export class FrontPageModule { }
