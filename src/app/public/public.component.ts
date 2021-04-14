import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
    selector     : 'public',
    templateUrl  : './public.component.html',
    styleUrls    : ['./public.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PublicComponent implements OnInit
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
