import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { PostListComponent } from './post-list/post-list.component';
import { SharedModule } from '../_shared/material/shared.module';


@NgModule({
  declarations: [
    PostComponent,
    PostListComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    SharedModule
  ]
})
export class PostModule { }
