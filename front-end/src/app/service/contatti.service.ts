import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contatti } from '../class/contatti';

@Injectable({
  providedIn: 'root'
})
export class ContattiService {

  private url: string

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/';
  }

  public mandaMessaggio(modulo: Contatti) {
    return this.http.post<Contatti>(this.url + "mandaMessaggioContatti", modulo);
  }
}
