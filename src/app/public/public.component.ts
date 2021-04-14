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
