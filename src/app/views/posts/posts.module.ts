import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsShowComponent } from './posts-show/posts-show.component';
import { PostsEditComponent } from './posts-edit/posts-edit.component';
import { PostsAddComponent } from './posts-add/posts-add.component';


@NgModule({
  declarations: [
    PostsListComponent,
    PostsShowComponent,
    PostsEditComponent,
    PostsAddComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PostsModule { }
