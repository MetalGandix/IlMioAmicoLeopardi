import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DiventaSocio } from '../class/diventa-socio';

@Injectable({
  providedIn: 'root'
})
export class DiventaSocioService {

  private url: string

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/';
  }

  public vediModuli(): Observable<DiventaSocio[]> {
    return this.http.get<DiventaSocio[]>(this.url + "vediModuli");
  }

  public mandaModulo(modulo: DiventaSocio) {
    return this.http.post<DiventaSocio>(this.url + "inserisciModulo", modulo);
  }

  public eliminaModulo(id: number) {
    return this.http.delete<DiventaSocio>(this.url + "cancellaModulo/" + id);
  }
}
