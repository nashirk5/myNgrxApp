import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './_core/layout/layout.component';
import { PageNotFoundComponent } from './_core/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'post',
    component: LayoutComponent,
    loadChildren: () => import('./post/post.module').then((m) => m.PostModule),
  },
  {
    path: 'user',
    component: LayoutComponent,
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  { path: '', redirectTo: '/post', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
