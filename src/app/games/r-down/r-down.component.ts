import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
    selector     : 'r-down',
    templateUrl  : './r-down.component.html',
    styleUrls    : ['./r-down.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class RDownComponent implements OnInit
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