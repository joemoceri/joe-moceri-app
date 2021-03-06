import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { BoxCopterHeroComponent } from './box-copter-hero.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PublicModule } from '../../public/public.module';

const routes: Routes = [
    {
        path     : 'games/box-copter-hero',
        component: BoxCopterHeroComponent
    },
    {
        path: '', redirectTo: 'box-copter-hero', pathMatch: 'full' // default: redirect to box-copter-hero when public
    },
];

@NgModule({
    declarations: [
        BoxCopterHeroComponent
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
export class BoxCopterHeroModule
{
}
