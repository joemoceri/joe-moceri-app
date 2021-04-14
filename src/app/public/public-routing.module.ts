import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { PublicComponent } from './public.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { AboutModule } from '../about/about.module';
import { CvModule } from '../cv/cv.module';
import { SwingingInCavesModule } from '../games/swinging-in-caves/swinging-in-caves.module';
import { BoxCopterHeroModule } from '../games/box-copter-hero/box-copter-hero.module';
import { BoxCopterHero3DModule } from '../games/box-copter-hero-3d/box-copter-hero-3d.module';
import { MadScientistAndMonsterModule } from '../games/mad-scientist-and-monster/mad-scientist-and-monster.module';
import { MetalTronModule } from '../games/metaltron/metaltron.module';
import { RDownModule } from '../games/r-down/r-down.module';
import { RunThroughTheHillsModule } from '../games/run-through-the-hills/run-through-the-hills.module';
import { SymbolMatchModule } from '../games/symbol-match/symbol-match.module';
import { TheStarMakerModule } from '../games/the-star-maker/the-star-maker.module';
import { PrivacyModule } from '../privacy/privacy.module';

@NgModule({
  imports: [
        MatButtonModule,
        // MatCheckboxModule,
        // MatFormFieldModule,
        MatIconModule,
        // MatInputModule,
        // MatCardModule,
    MatDividerModule,
    RouterModule,
    AboutModule,
    CvModule,
    SwingingInCavesModule,
    BoxCopterHeroModule,
    BoxCopterHero3DModule,
    MadScientistAndMonsterModule,
    MetalTronModule,
    RDownModule,
    RunThroughTheHillsModule,
    SymbolMatchModule,
    TheStarMakerModule,
    PrivacyModule,
      FlexLayoutModule
  ]
})
export class PublicRoutingModule
{
}
