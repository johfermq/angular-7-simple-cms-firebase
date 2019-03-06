import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

import { Post } from './../../interfaces/post';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  constructor(private angularFirestore: AngularFirestore) {}

  getPosts() {
  	return this.angularFirestore.collection<Post>('posts').snapshotChanges().pipe(
    	map(actions => actions.map(action =>
    	{
        	const data = action.payload.doc.data() as Post;
        	const id = action.payload.doc.id;
        	return { id, ...data };
      }))
    );
  }

  filterPosts(field: string, condition: any, value: string) {
    return this.angularFirestore.collection<Post>('posts', ref => ref.where(field, condition, value))
      .snapshotChanges().pipe(
        map(actions => actions.map(action =>
        {
            const data = action.payload.doc.data() as Post;
            const id = action.payload.doc.id;
            return { id, ...data };
        }))
      );
  }

  addPost(post: Post) {
  	return this.angularFirestore.collection('posts').add(post);
  }

  deletePost(postId) {
  	this.angularFirestore.doc(`posts/${postId}`).delete();
  }

  updatePost(postId, post: Post) {
  	this.angularFirestore.doc(`posts/${postId}`).update(post);
  }

}
