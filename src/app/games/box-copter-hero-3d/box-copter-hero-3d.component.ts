import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
    selector     : 'box-copter-hero-3d',
    templateUrl  : './box-copter-hero-3d.component.html',
    styleUrls    : ['./box-copter-hero-3d.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class BoxCopterHero3DComponent implements OnInit
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
