import { Component } from '@angular/core';
import { UserManagementService } from '@shared/user-management';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';
  isLoggedIn$ = this.userManagementService.isUserLoggedIn$;
  constructor(private userManagementService: UserManagementService) {}
  login() {
    this.userManagementService.checkCredentials(this.username, this.password);
  }
}
