import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';


//primeng
import { MegaMenuModule } from 'primeng/megamenu'
import { TreeSelectModule } from 'primeng/treeselect';
import { MessageService } from 'primeng/api';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import { ToastModule } from 'primeng/toast';

// Mat UI
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { HelpsComponent } from './helps/helps.component';
import { HomeComponent } from './home/home.component';
import {MatStepperModule} from '@angular/material/stepper';
import { PostComponent } from './post/post.component';
import { PostadComponent } from './post/postad/postad.component';







@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    UserComponent,
    SignInComponent,
    SignUpComponent,
    HelpsComponent,
    HomeComponent,
    PostComponent,
    PostadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MegaMenuModule,
    MatMenuModule,
    MatStepperModule,
    TreeSelectModule,
    HttpClientModule,
    ToastModule,
    CarouselModule,
    ButtonModule
  
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
