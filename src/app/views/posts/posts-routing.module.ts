import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsShowComponent } from './posts-show/posts-show.component';
import { PostsEditComponent } from './posts-edit/posts-edit.component';
import { PostsAddComponent } from './posts-add/posts-add.component';

const routes: Routes = [
  {
    path:'' ,
    component:PostsListComponent
  },
  {
    path:'show/:id' ,
    component:PostsShowComponent
  },
  {
    path:'edit/:id' ,
    component:PostsEditComponent,
  },
  {
    path:'add' ,
    component:PostsAddComponent
  }
 
 
 
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
