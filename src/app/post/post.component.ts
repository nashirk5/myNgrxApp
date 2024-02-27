import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostInterface } from '../_interface/post.interface';
import { Store, select } from '@ngrx/store';
import * as fromPost from '../_store/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post$!: Observable<PostInterface[]>;
  isPostEdit!: boolean;
  isLoading$!: Observable<boolean>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.initDispatch();
    this.initSubscriptions();
  }

  onShowAddEditPost(): void {
    this.store.dispatch(fromPost.showAddEditPost({ status: true }));
  }

  private initDispatch(): void {
    this.store.dispatch(fromPost.getPost());
  }

  private initSubscriptions(): void {
    this.post$ = this.store.pipe(select(fromPost.selectPostList));
    this.isLoading$ = this.store.pipe(select(fromPost.selectPostIsLoading));
    this.store.pipe(select(fromPost.selectPostAddEdit)).subscribe(data => this.isPostEdit = data);
  }
}
