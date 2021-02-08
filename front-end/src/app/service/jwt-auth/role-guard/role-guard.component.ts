import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-role-guard',
  templateUrl: './role-guard.component.html',
  styleUrls: ['./role-guard.component.css']
})
export class RoleGuardComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit(){
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    switch (route.routeConfig.path) {
      case 'area-riservata':
        if (this.authService.getRole().authority == 'ROLE_ADMIN') {
          return true;
        } else {
          return false;
        }

      case 'prenotazione-visita':
      case 'scelta-utente':
        if (this.authService.getRole().authority == 'ROLE_VISITATORE') {
          return true;
        } else {
          return false;
        }
      default: return false;
    }

  }
}

