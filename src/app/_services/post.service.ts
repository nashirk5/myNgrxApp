import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { PostInterface } from '../_interface/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: PostInterface[] = [
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' },
    { id: 3, title: 'Post 3' },
    { id: 4, title: 'Post 4' },
    { id: 5, title: 'Post 5' }
  ];

  constructor() { }

  getPost(): Observable<PostInterface[]> {
    return of(this.posts).pipe(delay(2000));
  }

  createPost(post: PostInterface) {
    this.posts = [...this.posts, post];

    return of(this.posts);
  }

  updatePost(updatePost: PostInterface): Observable<PostInterface[]> {
    this.posts = this.posts.map(post => post.id === updatePost.id ? updatePost : post);

    return of(this.posts);
  }

  deletePost(postId: number): Observable<PostInterface[]> {
    this.posts = this.posts.filter(data => data.id !== postId);

    return of(this.posts);
  }

}
