import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { PrivacyComponent } from './privacy.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PublicModule } from '../public/public.module';

const routes: Routes = [
    {
        path     : 'privacy',
        component: PrivacyComponent
    },
    {
        path: '', redirectTo: 'privacy', pathMatch: 'full' // default: redirect to privacy when public
    },
];

@NgModule({
    declarations: [
        PrivacyComponent
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
export class PrivacyModule
{
}
