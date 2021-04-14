import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
    selector     : 'mad-scientist-and-monster',
    templateUrl  : './mad-scientist-and-monster.component.html',
    styleUrls    : ['./mad-scientist-and-monster.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MadScientistAndMonsterComponent implements OnInit
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
