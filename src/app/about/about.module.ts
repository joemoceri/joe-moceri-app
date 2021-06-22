import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { AboutComponent } from './about.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PublicModule } from '../public/public.module';

const routes: Routes = [
    {
        path     : 'about',
        component: AboutComponent
    },
    {
        path: '', redirectTo: 'about', pathMatch: 'full' // default: redirect to about when public
    },
];

@NgModule({
    declarations: [
        AboutComponent
    ],
    imports     : [
      RouterModule.forChild(routes),
      MatButtonModule,
      MatIconModule,
      MatDividerModule,
      PublicModule,
      FlexLayoutModule
    ]
})
export class AboutModule
{
}
