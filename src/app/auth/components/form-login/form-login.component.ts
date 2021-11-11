import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styles: [
  ]
})
export class FormLoginComponent implements OnInit {

  constructor( private fb:FormBuilder) { }

  myFormLogin!:FormGroup;

  ngOnInit(): void {

    this.myFormLogin = this.fb.group({       
        userName    : ['', Validators.required],
        password : ['', [
                Validators.required,
                Validators.minLength(6)
            ]
        ],
    });
  }

}
