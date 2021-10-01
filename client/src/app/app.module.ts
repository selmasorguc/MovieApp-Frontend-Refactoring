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
import { SearchModule } from './features/search/search.module';
import { TopRatedModule } from './features/top-rated/top-rated.module';
import { MediaCardComponent } from './features/single-media/media-card/media-card.component';
import { SingleMediaModule } from './features/single-media/single-media.module';
import { LoginComponent } from './shared/login/login.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    RatingModule.forRoot(),
    SharedModule,
    TopRatedModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
