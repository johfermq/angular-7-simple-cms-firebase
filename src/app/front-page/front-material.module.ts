import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxMasonryModule } from 'ngx-masonry';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
  	MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatGridListModule,
    NgxMasonryModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule
  ],
  exports: [
  	MatButtonModule,
  	MatIconModule,
  	MatToolbarModule,
  	MatMenuModule,
    MatCardModule,
    MatGridListModule,
    NgxMasonryModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule
  ],
})

export class FrontMaterialModule { }
