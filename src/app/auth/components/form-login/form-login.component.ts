import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-form-login',
	templateUrl: './form-login.component.html',
	styles: [],
})
export class FormLoginComponent implements OnInit {
	constructor(private fb: FormBuilder, private authService: AuthService, private router:Router) {}

	myFormLogin!: FormGroup;

	ngOnInit(): void {
		this.myFormLogin = this.fb.group({
			userName: ['', Validators.required],
			password: ['', [Validators.required, Validators.minLength(6)]],
		});
	}

	login() {
		const username = this.myFormLogin.controls['userName'].value;
		const password = this.myFormLogin.controls['password'].value;
		this.authService.login(username, password).subscribe(
			(res) => {
                if(res == true){
                  this.modal('Access granted','success')
                  this.router.navigateByUrl('/home')
                }else{
                   
                    
                    this.modal(res.toString(),'warning')
                }       
            },
			(err: HttpErrorResponse) => {
                console.log({
                    "aqui HttpErrorResponse:":err.message
                });
                this.modal(err.message,'warning')
			}
		);
	}


    modal(title:string, icon:any ){
          Swal.fire({
            title,
            icon,
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }

    fieldIsValid(campo: string) {
		return (
			this.myFormLogin.controls[campo].errors &&
			this.myFormLogin.controls[campo].touched
		);
	}
}
