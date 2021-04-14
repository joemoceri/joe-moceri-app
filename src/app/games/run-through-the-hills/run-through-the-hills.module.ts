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

import { RunThroughTheHillsComponent } from './run-through-the-hills.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PublicModule } from '../../public/public.module';

const routes: Routes = [
    {
        path     : 'games/run-through-the-hills',
        component: RunThroughTheHillsComponent
    },
    {
        path: '', redirectTo: 'run-through-the-hills', pathMatch: 'full' // default: redirect to run-through-the-hills when public
    },
];

@NgModule({
    declarations: [
        RunThroughTheHillsComponent
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
export class RunThroughTheHillsModule
{
}
