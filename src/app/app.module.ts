import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { environment } from './../environments/environment';

import { AppComponent } from './app.component';

import { AuthenticationService } from './services/authentication/authentication.service';
import { MenusService } from './services/menus/menus.service';
import { PostsService } from './services/posts/posts.service';

import { AdminGuard } from './guards/admin.guard';
import { SuscriberGuard } from './guards/suscriber.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthenticationService,
    MenusService,
    PostsService,
    AdminGuard,
    SuscriberGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

  constructor(private angularFirestore: AngularFirestore) {
    this.angularFirestore.firestore.settings({ timestampsInSnapshots: true });
  }

}
