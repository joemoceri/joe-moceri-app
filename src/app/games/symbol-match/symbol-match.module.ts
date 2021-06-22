import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { SymbolMatchComponent } from './symbol-match.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PublicModule } from '../../public/public.module';

const routes: Routes = [
    {
        path     : 'games/symbol-match',
        component: SymbolMatchComponent
    },
    {
        path: '', redirectTo: 'symbol-match', pathMatch: 'full' // default: redirect to symbol-match when public
    },
];

@NgModule({
    declarations: [
        SymbolMatchComponent
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
export class SymbolMatchModule
{
}
