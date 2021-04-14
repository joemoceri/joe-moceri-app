import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
    selector     : 'the-star-maker',
    templateUrl  : './the-star-maker.component.html',
    styleUrls    : ['./the-star-maker.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TheStarMakerComponent implements OnInit
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
