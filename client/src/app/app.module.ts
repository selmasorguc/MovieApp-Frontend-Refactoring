import { MediaComponent } from './features/top-rated/media/media.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NotFoundComponent } from './shared/errors/not-found/not-found.component';
import { RatingModule } from 'ngx-bootstrap/rating';
import { ServerErrorComponent } from './shared/errors/server-error/server-error.component';
import { SharedModule } from './shared/shared-module/shared.module';
import { SearchListComponent } from './features/search/search-list/search-list.component';
import { MediaCardComponent } from './features/top-rated/media-card/media-card.component';
import { TvShowsComponent } from './features/top-rated/tv-shows/tv-shows.component';
import { MoviesComponent } from './features/top-rated/movies/movies.component';



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
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TabsModule.forRoot(),
    RatingModule.forRoot(),
    SharedModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
