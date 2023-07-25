import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { HelpsComponent } from './helps/helps.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
const routes: Routes = [
  { path: 'post', component: PostComponent },
  {
    path: 'help',
    component: HelpsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
