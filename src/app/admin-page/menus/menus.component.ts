import { Component, OnInit, AfterViewInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
// import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

import { ConfirmationDialogComponent } from './../shared/confirmation-dialog/confirmation-dialog.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';

import { Menu } from './../../interfaces/menu';
import { MenusService } from './../../services/menus/menus.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})

export class MenusComponent implements OnInit, AfterViewInit {

	dataSource = new MatTableDataSource<Menu>();
	displayedColumns: string[] = ['id', 'title', 'url', 'actions'];

	newMenu: Menu = {
		title: '',
		url: ''
	}

	@ViewChild(MatSort) sort: MatSort;
	@ViewChild(MatPaginator) paginator: MatPaginator;

	constructor(
    private menusService: MenusService,
    public dialog: MatDialog,
    // public breakpointObserver: BreakpointObserver
   ) {
    // breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
    //   this.displayedColumns = result.matches ?
    //       ['title', 'url', 'actions'] :
    //       ['id', 'title', 'url', 'actions'];
    // });
  }

	ngOnInit() {
		this.menusService.getMenus().subscribe((data: any) => this.dataSource.data = data);
	}

	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
	  this.dataSource.sort = this.sort;
	}

	searchMenus(filterValue: string) {
  	this.dataSource.filter = filterValue.trim().toLowerCase();
	}

  addMenu() {
    this.menusService.addMenu(this.newMenu).then(() => {
      this.newMenu = {
        title: '',
        url: ''
      }
    });
  }

  updateMenu(menuId, menu: Menu) {
    this.menusService.updateMenu(menuId, menu);
  }

  deleteMenu(menuId) {
    this.menusService.deleteMenu(menuId);
  }

  openDialog(menuId): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result === 'true') this.deleteMenu(menuId);
    });
  }

  openEditDialog(menu: Menu): void {
    const dialogRef = this.dialog.open(EditMenuComponent, {
      width: '600px',
      data: { ...menu }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== 'false') this.updateMenu(menu.id, result);
    });
  }

}
