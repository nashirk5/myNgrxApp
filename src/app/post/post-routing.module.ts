import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post.component';
import { CreateUpdatePostComponent } from './create-update-post/create-update-post.component';

const routes: Routes = [
  { path: '', component: PostComponent },
  { path: 'add', component: CreateUpdatePostComponent },
  { path: 'update/:id', component: CreateUpdatePostComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
