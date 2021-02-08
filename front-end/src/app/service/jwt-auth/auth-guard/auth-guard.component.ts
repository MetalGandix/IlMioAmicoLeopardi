import { Component, OnInit } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-auth-guard',
  templateUrl: './auth-guard.component.html',
  styleUrls: ['./auth-guard.component.css']
})
export class AuthGuardComponent implements CanActivate {

  constructor(private authService: AuthenticationService) {}

  canActivate() {
    return this.authService.isUserLoggedIn();
  }

}
