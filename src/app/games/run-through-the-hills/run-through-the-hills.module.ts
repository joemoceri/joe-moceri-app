import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
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
      MatIconModule,
      MatDividerModule,
      PublicModule,
      FlexLayoutModule
    ]
})
export class RunThroughTheHillsModule
{
}
