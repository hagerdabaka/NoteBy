import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/component/layout/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './shared/component/layout/user-layout/user-layout.component';
import { AuthLayoutComponent } from './shared/component/layout/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './shared/component/layout/blank-layout/blank-layout.component';

const routes: Routes = [
  {
    path:'' ,
    component:BlankLayoutComponent,
    children:[
      {
        path:'',
        loadChildren: () => import ('./views/pages/pages.module').then(m=> m.PagesModule)
      }
    ]
  },
  {
    path:'admin' ,
    component:AdminLayoutComponent,
    children:[
      {
        path:'posts',
        loadChildren: () => import ('./views/posts/posts.module').then(m=> m.PostsModule)
      }
    ]
  },
  {
    path:'user' ,
    component:UserLayoutComponent,
    children:[
      {
        path:'notes',
        loadChildren: () => import ('./views/notes/notes.module').then(m=> m.NotesModule)
      }
    ]
  },
  {
    path:'auth' ,
    component:AuthLayoutComponent,
    children:[
      {
        path:'',
        loadChildren: () => import ('./views/auth/auth.module').then(m=> m.AuthModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
