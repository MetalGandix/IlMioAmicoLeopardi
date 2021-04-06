import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class RegistrazioneService {

  constructor(private http: HttpClient) {}

  private url = 'https://api-app.centroleopardi.it:8080/'

  public save(user: User) {
    return this.http.post<User>(this.url+"user", user);
  }

  public existUser(username: string) {
    return this.http.get<boolean>(this.url+"existUser/"+username);
  }
}
