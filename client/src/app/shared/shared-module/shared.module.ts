import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingModule } from 'ngx-bootstrap/rating';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ToastrModule } from 'ngx-toastr';
import { ServerErrorComponent } from '../errors/server-error/server-error.component';
import { NotFoundComponent } from '../errors/not-found/not-found.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavComponent,
    NotFoundComponent,
    ServerErrorComponent
  ],
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ToastrModule.forRoot(),
    Ng2SearchPipeModule,
    TabsModule.forRoot(),
    BrowserAnimationsModule,
    NgxSpinnerModule,
    RouterModule
  ],
  exports: [
    NavComponent,
    NotFoundComponent,
    ServerErrorComponent,
    TabsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ToastrModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    NgxSpinnerModule
  ]
})
export class SharedModule { }
