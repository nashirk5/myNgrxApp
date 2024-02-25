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

  post$: Observable<PostInterface[]> | undefined

  constructor(private postSrv: PostService) { }

  ngOnInit(): void {
    this.post$ = this.postSrv.getPost();
  }
}
