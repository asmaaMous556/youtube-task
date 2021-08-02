import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { YouTubePlayerModule} from '@angular/youtube-player';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {RatingModule} from 'primeng/rating';
import {FormsModule} from '@angular/forms'
import {NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    YouTubePlayerModule,
    FontAwesomeModule,
    RatingModule,
    NgbRatingModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
