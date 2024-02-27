import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromPost from '../../_store/post';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  isLoading$!: Observable<boolean>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading$ = this.store.pipe(select(fromPost.selectPostIsLoading));
    }, 0);
  }

}
