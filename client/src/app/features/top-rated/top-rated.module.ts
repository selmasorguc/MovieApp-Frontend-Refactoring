import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared-module/shared.module';
import { SearchModule } from '../search/search.module';
import { MediaCardComponent } from '../single-media/media-card/media-card.component';
import { SingleMediaModule } from '../single-media/single-media.module';
import { MediaComponent } from './media/media.component';
import { MoviesComponent } from './movies/movies.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';

@NgModule({
    declarations: [
        MediaComponent,
        TvShowsComponent,
        MoviesComponent,
        
    ],
    imports: [
        SharedModule,
        SearchModule,
        SingleMediaModule
    ],
    exports: [
        MediaComponent,
        TvShowsComponent,
        MoviesComponent,
        
    ]
})
export class TopRatedModule { }
