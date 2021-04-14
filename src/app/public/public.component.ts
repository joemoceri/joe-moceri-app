import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
    selector     : 'public',
    templateUrl  : './public.component.html',
    styleUrls    : ['./public.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PublicComponent implements OnInit
{
  gamesNavButtonText: string = 'Games';

    constructor(
        private router: Router
    )
    {
      router.events.subscribe(e => {
        if (e instanceof NavigationEnd) {
          if (e.url.endsWith('swinging-in-caves')) {
            this.gamesNavButtonText = 'Games (selected: Swinging In Caves)';
          }
          else if (e.url.endsWith('box-copter-hero')) {
            this.gamesNavButtonText = 'Games (selected: Box Copter Hero)';
          }
          else if (e.url.endsWith('box-copter-hero-3d')) {
            this.gamesNavButtonText = 'Games (selected: Box Copter Hero 3D)';
          }
          else if (e.url.endsWith('mad-scientist-and-monster')) {
            this.gamesNavButtonText = 'Games (selected: Mad Scientist And Monster)';
          }
          else if (e.url.endsWith('metaltron')) {
            this.gamesNavButtonText = 'Games (selected: MetalTron)';
          }
          else if (e.url.endsWith('r-down')) {
            this.gamesNavButtonText = 'Games (selected: R Down)';
          }
          else if (e.url.endsWith('run-through-the-hills')) {
            this.gamesNavButtonText = 'Games (selected: Run Through The Hills)';
          }
          else if (e.url.endsWith('symbol-match')) {
            this.gamesNavButtonText = 'Games (selected: Symbol Match)';
          }
          else if (e.url.endsWith('the-star-maker')) {
            this.gamesNavButtonText = 'Games (selected: The Star Maker)';
          }
          else {
            this.gamesNavButtonText = 'Games';
          }
        }
      });
    }

    ngOnInit(): void
    {

  }

  navigate(url: string): void {

    let a = document.getElementById('navigatorId');

    a?.setAttribute('href', url);

    a?.click();
  }
}
