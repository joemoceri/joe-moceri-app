import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { PublicComponent } from './public.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { AboutModule } from '../about/about.module';
import { MatMenuModule } from '@angular/material/menu';
//import { CvModule } from '../cv/cv.module';


@NgModule({
    declarations: [
        PublicComponent
    ],
  imports: [
    MatButtonModule,
    MatMenuModule,
        // MatCheckboxModule,
        // MatFormFieldModule,
        MatIconModule,
        // MatInputModule,
        // MatCardModule,
    MatDividerModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports: [
    PublicComponent
  ]
})
export class PublicModule
{
}
