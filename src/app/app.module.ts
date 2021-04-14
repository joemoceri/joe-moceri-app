import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { TourMatMenuModule } from 'ngx-tour-md-menu';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { ModalService } from './modal/modal.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    MglTimelineModule,
    TourMatMenuModule.forRoot(),
    FlexLayoutModule
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
