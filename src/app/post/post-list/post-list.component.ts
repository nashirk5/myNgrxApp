import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { PostInterface } from 'src/app/_interface/post.interface';
import * as fromPost from '../../_store/post'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {

  @Input() postData!: PostInterface[] | null;

  constructor(private readonly store: Store) { }

  deletePost(post: PostInterface) {
    if (confirm(`Are you sure, do you want to delete ${post.title}`)) {
      this.store.dispatch(fromPost.deletePost({ post }))
    }
  }

}
