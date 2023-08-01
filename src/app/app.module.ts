import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { HelpsComponent } from './helps/helps.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { PostadComponent } from './post/postad/postad.component';
import { FaqComponent } from './helps/faq/faq.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { SingleproductComponent } from './home/singleproduct/singleproduct.component';
import { LocationsComponent } from './locations/locations.component';
import { SingleLocationComponent } from './locations/single-location/single-location.component';
import { ViewproductComponent } from './home/viewproduct/viewproduct.component';

//pipe
import { SortlocationPipe } from '../shared/sortlocation.pipe';
import { FaqPipePipe } from '../shared/faq-pipe.pipe';

//primeng
import { MegaMenuModule } from 'primeng/megamenu'
import { TreeSelectModule } from 'primeng/treeselect';
import { MessageService } from 'primeng/api';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';

// Mat UI
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


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
    PostadComponent,
    FaqComponent,
    LocationsComponent,
    SingleLocationComponent,
    SingleproductComponent,
    FavouritesComponent,
    SortlocationPipe,
    FaqPipePipe,
    ViewproductComponent
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
    ButtonModule,
    MatCardModule,
    CardModule,
    MatIconModule

  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
