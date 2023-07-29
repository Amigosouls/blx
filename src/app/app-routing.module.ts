import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { HelpsComponent } from './helps/helps.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { PostadComponent } from './post/postad/postad.component';
import { FaqComponent } from './helps/faq/faq.component';
 import { authGuardGuard } from 'src/shared/auth-guard.guard';
import { LocationsComponent } from './locations/locations.component';
import { FavouritesComponent } from './favourites/favourites.component';
// import { ViewProductComponent } from './home/view-product/view-product.component';
 import { ViewproductComponent } from './home/viewproduct/viewproduct.component';
//import * as path from 'path';
const routes: Routes = [
  {
    path: 'post',
    component: PostComponent//,canActivate:[authGuardGuard]
  },
  {
    path: 'help',
    component: HelpsComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'postad/:id',
    component: PostadComponent//,canActivate:[authGuardGuard]
  },
  {
    path: 'faq/:id',
    component: FaqComponent,
  },
  {
    path: 'signin',
    component: SignInComponent,
  },  
  {
    path: 'viewProduct/:id',
    component: ViewproductComponent,
  },
  {
    path:'locations',
    component:LocationsComponent
  },
  {
    path:'favourites',
    component:FavouritesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
