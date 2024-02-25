import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { PostInterface } from '../_interface/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getPost(): Observable<PostInterface[]> {

    const posts = [
      { id: 1, title: 'Post 1' },
      { id: 2, title: 'Post 2' },
      { id: 3, title: 'Post 3' },
      { id: 4, title: 'Post 4' },
      { id: 5, title: 'Post 5' }
    ]

    return of(posts).pipe(delay(2000))
  }

}
