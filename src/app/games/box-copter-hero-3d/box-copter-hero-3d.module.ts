import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule, MatCardModule, MatDividerModule } from '@angular/material';
// import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule, MatCardModule, MatDividerModule } from '@angular/material';
// import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule, MatCardModule, MatDividerModule } from '@angular/material';
// import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule, MatCardModule, MatDividerModule } from '@angular/material';
// import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule, MatCardModule, MatDividerModule } from '@angular/material';
// import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule, MatCardModule, MatDividerModule } from '@angular/material';

import { BoxCopterHero3DComponent } from './box-copter-hero-3d.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PublicModule } from '../../public/public.module';

const routes: Routes = [
    {
        path     : 'games/box-copter-hero-3d',
        component: BoxCopterHero3DComponent
    },
    {
        path: '', redirectTo: 'box-copter-hero-3d', pathMatch: 'full' // default: redirect to box-copter-hero-3d when public
    },
];

@NgModule({
    declarations: [
        BoxCopterHero3DComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        // MatCheckboxModule,
        // MatFormFieldModule,
        MatIconModule,
        // MatInputModule,
        // MatCardModule,
      MatDividerModule,
      PublicModule,
      FlexLayoutModule
    ]
})
export class BoxCopterHero3DModule
{
}
