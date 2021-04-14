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

import { TheStarMakerComponent } from './the-star-maker.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PublicModule } from '../../public/public.module';

const routes: Routes = [
    {
        path     : 'games/the-star-maker',
        component: TheStarMakerComponent
    },
    {
        path: '', redirectTo: 'the-star-maker', pathMatch: 'full' // default: redirect to the-star-maker when public
    },
];

@NgModule({
    declarations: [
        TheStarMakerComponent
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
export class TheStarMakerModule
{
}
