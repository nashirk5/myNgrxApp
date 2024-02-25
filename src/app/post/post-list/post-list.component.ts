import { Component, Input } from '@angular/core';
import { PostInterface } from 'src/app/_interface/post.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {

  @Input() postData: PostInterface[] | null | undefined

}
