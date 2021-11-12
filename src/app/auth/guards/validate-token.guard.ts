import { Injectable } from '@angular/core';
import {
	CanActivate,
	CanLoad,
	Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
	providedIn: 'root',
})
export class ValidateTokenGuard implements CanActivate, CanLoad {

    constructor( private authService: AuthService, private router:Router){
    }
	canActivate(): Observable<boolean> | boolean {
        const token = this.authService.getToken();
        if(token == undefined || token== null){
            this.router.navigateByUrl('auth')
            return false;
        }
		return true;
	}
	canLoad(): Observable<boolean> | boolean {
        const token = this.authService.getToken();
        if(token == undefined || token== null){
            this.router.navigateByUrl('auth')
            return false;
        }
		return true;
	}
}
