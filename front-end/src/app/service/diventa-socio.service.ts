import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DiventaSocio } from '../class/diventa-socio';
import { ModuliConfermati } from '../class/moduli-confermati';

@Injectable({
  providedIn: 'root'
})
export class DiventaSocioService {

  private url: string

  constructor(private http: HttpClient) {
    this.url = 'https://api-app.centroleopardi.it:8080/';
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

  public mandaModuloConfermato(moduloConfermato: ModuliConfermati){
    return this.http.post<ModuliConfermati>(this.url + "moduliConfermati", moduloConfermato);
  }

  public vediModuliConfermati(): Observable<ModuliConfermati[]> {
    return this.http.get<ModuliConfermati[]>(this.url + "vediModuliConfermati");
  }

  public eliminaModuloConfermato(id: number) {
    return this.http.delete<ModuliConfermati>(this.url + "eliminaModuliConfermati/" + id);
  }
}
