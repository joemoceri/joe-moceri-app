import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
    selector     : 'box-copter-hero',
    templateUrl  : './box-copter-hero.component.html',
    styleUrls    : ['./box-copter-hero.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class BoxCopterHeroComponent implements OnInit
{
    constructor(
        private router: Router
    )
    {
        
    }

    ngOnInit(): void
    {

    }
}
