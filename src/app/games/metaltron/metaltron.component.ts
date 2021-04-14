import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
    selector     : 'metaltron',
    templateUrl  : './metaltron.component.html',
    styleUrls    : ['./metaltron.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MetalTronComponent implements OnInit
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
