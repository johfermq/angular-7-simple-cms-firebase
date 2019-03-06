import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

import { Menu } from './../../interfaces/menu';

@Injectable({
  providedIn: 'root'
})

export class MenusService {

  constructor(private angularFirestore: AngularFirestore) {}

  getMenus() {
  	return this.angularFirestore.collection<Menu>('menus').snapshotChanges().pipe(
    	map(actions => actions.map(action =>
    	{
        	const data = action.payload.doc.data() as Menu;
        	const id = action.payload.doc.id;
        	return { id, ...data };
      	}))
    );
  }

  filterMenus(field: string, condition: any, value: string) {
    return this.angularFirestore.collection<Menu>('menus', ref => ref.where(field, condition, value))
      .snapshotChanges().pipe(
        map(actions => actions.map(action =>
        {
            const data = action.payload.doc.data() as Menu;
            const id = action.payload.doc.id;
            return { id, ...data };
          }))
      );
  }

  addMenu(menu: Menu) {
  	return this.angularFirestore.collection('menus').add(menu);
  }

  deleteMenu(menuId) {
  	this.angularFirestore.doc(`menus/${menuId}`).delete();
  }

  updateMenu(menuId, menu: Menu) {
  	this.angularFirestore.doc(`menus/${menuId}`).update(menu);
  }

}
