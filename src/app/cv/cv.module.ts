import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { CvComponent } from './cv.component';
import { CvService } from './cv.service';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TourMatMenuModule } from 'ngx-tour-md-menu';
import { PublicModule } from '../public/public.module';

const routes: Routes = [
    {
        path     : 'timeline',
        component: CvComponent
    }
];

@NgModule({
    declarations: [
        CvComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        MatTableModule,
        MatCardModule,
        MglTimelineModule,
        MatToolbarModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatMenuModule,
        MatSelectModule,
        MatTabsModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDividerModule,
        FormsModule,
      ReactiveFormsModule,
        PublicModule,
      CommonModule,
      TourMatMenuModule
    ],
    providers   : [
      CvService
    ]
})
export class CvModule
{
}

