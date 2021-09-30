import { MediaComponent } from './media/media.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { SearchListComponent } from './search-list/search-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { RatingModule } from 'ngx-bootstrap/rating';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { MediaCardComponent } from './media-card/media-card.component';
import { MoviesComponent } from './movies/movies.component';
import { SharedModule } from './shared/shared-module/shared.module';
import { Shared2Module } from './_modules/shared2.module';
import { NavComponent } from './shared/nav/nav.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchListComponent,
    NotFoundComponent,
    ServerErrorComponent,
    MediaComponent,
    MediaCardComponent, 
    TvShowsComponent,
    SearchListComponent, 
    MoviesComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TabsModule.forRoot(),
    RatingModule.forRoot(),
    SharedModule,
    Shared2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
