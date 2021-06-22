import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MetalTronComponent } from './metaltron.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PublicModule } from '../../public/public.module';

const routes: Routes = [
    {
        path     : 'games/metaltron',
        component: MetalTronComponent
    },
    {
        path: '', redirectTo: 'metaltron', pathMatch: 'full' // default: redirect to metaltron when public
    },
];

@NgModule({
    declarations: [
        MetalTronComponent
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
export class MetalTronModule
{
}
