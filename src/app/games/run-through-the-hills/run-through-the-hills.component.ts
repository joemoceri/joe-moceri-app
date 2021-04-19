import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
    selector     : 'run-through-the-hills',
    templateUrl  : './run-through-the-hills.component.html',
    styleUrls    : ['./run-through-the-hills.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class RunThroughTheHillsComponent implements OnInit
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
