import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared-module/shared.module';
import { SingleMediaModule } from '../single-media/single-media.module';
import { SearchListComponent } from './search-list/search-list.component';


@NgModule({
    declarations: [
        SearchListComponent
    ],
    imports: [
        SharedModule,
        SingleMediaModule
    ],
    exports: [
        SearchListComponent
    ]
})
export class SearchModule { }
