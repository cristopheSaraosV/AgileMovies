import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/interfaces/loginResApi.interface';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styles: [],
})
export class MenuComponent implements OnInit {
	constructor(private userService: UserService, private router: Router, private authService: AuthService) {}

	user!: User;

	ngOnInit(): void {
		this.user = JSON.parse(this.userService.getUser());
	}

	logout() {
        this.authService.deleteLocalStorage();
		this.router.navigateByUrl('/auth');
	}
}
