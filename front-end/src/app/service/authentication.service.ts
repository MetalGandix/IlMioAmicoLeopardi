import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from '@angular/common';
import { map } from 'rxjs/operators';
import { CanActivate, RouteConfigLoadEnd, Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { Role } from '../class/role';

export class JwtResponse{
  constructor(
    public jwttoken:string,
     ) {}
}

export class User{
  constructor(
    public username: string,
    public password: string,
    public name: string,
    public lastname: string,
    public checkbox1: boolean,
    public checkbox2: boolean,
    public checkbox3: boolean,
    public enabled: boolean,
    public roles: Role
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient:HttpClient, private router: Router, private location: Location) { 
     }

  authenticate(username, password) {
    return this.httpClient.post<any>('https://api-app.centroleopardi.it:8080/authenticate',{username,password}).pipe(
      map(
        userData => {
        sessionStorage.setItem('username',username);
        let tokenStr= userData.token;
        sessionStorage.setItem('token', tokenStr);
        sessionStorage.setItem('Role', userData.utente.authorities[0].authority);
        return userData;
        }
      )

    );
  }
  
  isUserLoggedIn() {
    let user = sessionStorage.getItem('token');
    let username = sessionStorage.getItem('username');
    return !(user && username === null)
  }

  logOut() {
    //window.location.reload()
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('Role');
    this.router.navigate(['/home']).then(() => {
      window.location.reload();
    });
  }

  getRole(){
    let token = jwt_decode(sessionStorage.getItem('token'));
    return token['role'];
  }
}