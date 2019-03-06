import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Menu } from './../../../interfaces/menu';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.scss']
})

export class EditMenuComponent implements OnInit {

  	constructor(@Inject(MAT_DIALOG_DATA) public data: Menu) { }

  	ngOnInit() {
  	}

}
