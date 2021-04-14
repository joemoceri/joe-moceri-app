import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
    selector     : 'privacy',
    templateUrl  : './privacy.component.html',
    styleUrls    : ['./privacy.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PrivacyComponent implements OnInit
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
