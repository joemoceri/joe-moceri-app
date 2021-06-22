import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MadScientistAndMonsterComponent } from './mad-scientist-and-monster.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PublicModule } from '../../public/public.module';

const routes: Routes = [
    {
        path     : 'games/mad-scientist-and-monster',
        component: MadScientistAndMonsterComponent
    },
    {
        path: '', redirectTo: 'mad-scientist-and-monster', pathMatch: 'full' // default: redirect to mad-scientist-and-monster when public
    },
];

@NgModule({
    declarations: [
        MadScientistAndMonsterComponent
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
export class MadScientistAndMonsterModule
{
}
