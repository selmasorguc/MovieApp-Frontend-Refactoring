import { NgModule } from '@angular/core';
import { RatingModule } from 'ngx-bootstrap/rating';
import { SharedModule } from 'src/app/shared/shared-module/shared.module';
import { MediaCardComponent } from './media-card/media-card.component';


@NgModule({
    declarations: [
        MediaCardComponent
    ],
    imports: [
        SharedModule,
        RatingModule
    ],
    exports: [
        MediaCardComponent
    ]
})
export class SingleMediaModule { }
