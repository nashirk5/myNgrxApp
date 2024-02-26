import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PostInterface } from 'src/app/_interface/post.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {

  @Input() postData!: PostInterface[] | null;
  @Output() deletePostId = new EventEmitter<number>();

  deletePost(post: PostInterface) {
    if (confirm(`Are you sure, do you want to delete ${post.title}`)) {
      this.deletePostId.emit(post?.id);
    }
  }

}
