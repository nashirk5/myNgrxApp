import { Component, OnInit } from '@angular/core';
import { PostService } from '../_services/post.service';
import { Observable } from 'rxjs';
import { PostInterface } from '../_interface/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post$: Observable<PostInterface[]> | undefined;
  isPostEdit: boolean = false;

  constructor(private postSrv: PostService) { }

  ngOnInit(): void {
    this.post$ = this.postSrv.getPost();

    setTimeout(() => {
      this.post$ = this.postSrv.createPost({ id: 7, title: 'Test' })
    }, 5000);

    setTimeout(() => {
      this.post$ = this.postSrv.updatePost({ id: 7, title: 'Update' })
    }, 8000);
  }

  deletePost(postId: number) {
    this.post$ = this.postSrv.deletePost(postId);
  }
}
