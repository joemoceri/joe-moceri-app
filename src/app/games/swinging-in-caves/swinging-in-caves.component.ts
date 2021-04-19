import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
    selector     : 'swinging-in-caves',
    templateUrl  : './swinging-in-caves.component.html',
    styleUrls    : ['./swinging-in-caves.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SwingingInCavesComponent implements OnInit
{
    constructor(
        private router: Router
    )
    {
        
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
