import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { SwingingInCavesComponent } from './swinging-in-caves.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PublicModule } from '../../public/public.module';

const routes: Routes = [
    {
        path     : 'games/swinging-in-caves',
        component: SwingingInCavesComponent
    },
    {
        path: '', redirectTo: 'swinging-in-caves', pathMatch: 'full' // default: redirect to swinging-in-caves when public
    },
];

@NgModule({
    declarations: [
        SwingingInCavesComponent
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
export class SwingingInCavesModule
{
}
