import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { PostListComponent } from './post-list/post-list.component';
import { SharedModule } from '../_shared/material/shared.module';
import { CreateUpdatePostComponent } from './create-update-post/create-update-post.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PostComponent,
    PostListComponent,
    CreateUpdatePostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class PostModule { }
