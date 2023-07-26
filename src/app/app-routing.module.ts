import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { HelpsComponent } from './helps/helps.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
//import * as path from 'path';
const routes: Routes = [
 { path: 'post', component: PostComponent },
  {
    path: 'help',
    component: HelpsComponent,
  },
  {
    path:'',component:HomeComponent
  },
  {
  path:'signup',component:SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
