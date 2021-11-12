import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoginResAPI } from '../interfaces/loginResApi.interface';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(private http: HttpClient) {}

	private _urlBase = environment.URLBASE;

	login(
		username: string,
		password: string
	): Observable<boolean | HttpErrorResponse> {
		const url: string = `${this._urlBase}/auth/login`;
		return this.http
			.post<LoginResAPI>(url, { username, password })
			.pipe(
				map((resp) => {
					const { user } = resp.data;
					const { token, refresh_token } = resp.data.payload;
					localStorage.setItem('refresh_token', refresh_token);
					localStorage.setItem('token', token);
					localStorage.setItem('user', JSON.stringify(user));

					return true;
				}),
				catchError((err) => {
            
                    return of(err.error.message);
                    
				})
			);
	}


    getToken(){
        return localStorage.getItem('token');
    }

    refresh_token(){
        const url: string = `${this._urlBase}/auth/refresh`;
        return this.http.post(url, localStorage.getItem('refresh_token') );
    }


    deleteLocalStorage(){
        localStorage.clear();
    }
}
