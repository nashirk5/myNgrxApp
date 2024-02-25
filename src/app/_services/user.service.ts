import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { UserInterface } from '../_interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getPost(): Observable<UserInterface[]> {

    const posts = [
      { id: 1, name: 'User 1' },
      { id: 2, name: 'User 2' },
      { id: 3, name: 'User 3' },
      { id: 4, name: 'User 4' },
      { id: 5, name: 'User 5' }
    ]

    return of(posts).pipe(delay(2000))
  }

}
