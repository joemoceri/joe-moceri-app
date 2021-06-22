import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { PublicComponent } from './public.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
    declarations: [
        PublicComponent
    ],
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports: [
    PublicComponent
  ]
})
export class PublicModule
{
}
