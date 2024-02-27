import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromPost from '../../_store/post';

@Component({
  selector: 'app-create-update-post',
  templateUrl: './create-update-post.component.html',
  styleUrls: ['./create-update-post.component.scss']
})
export class CreateUpdatePostComponent {

  postTitle!: string;

  constructor(private readonly store: Store) { }

  onCancel() {
    this.store.dispatch(fromPost.hideAddEditPost({ status: false }));
  }

  onSubmit() {
    if (this.postTitle) {
      this.store.dispatch(fromPost.createPost({ post: { id: Math.random() * 1000, title: this.postTitle } }))
    }
  }

}
