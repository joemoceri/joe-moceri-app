import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
    selector     : 'symbol-match',
    templateUrl  : './symbol-match.component.html',
    styleUrls    : ['./symbol-match.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SymbolMatchComponent implements OnInit
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
