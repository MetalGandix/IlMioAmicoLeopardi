import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Prenotazione } from '../class/prenotazione';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrenotazioneService {

  private url: string

  constructor(private http: HttpClient) {
    this.url = 'https://api-app.centroleopardi.it:8080/';
  }

  public findAll(): Observable<Prenotazione[]> {
    return this.http.get<Prenotazione[]>(this.url + "vediVisite");
  }

  public save(prenotazione: Prenotazione) {
    return this.http.post<Prenotazione>(this.url + "visita", prenotazione);
  }

  public deletePrenotazione(id: number){
    return this.http.delete<Prenotazione>(this.url + "cancellaVisita/" + id);
  }

  public saveVisiteCancellate(prenotazione: Prenotazione) {
    return this.http.post<Prenotazione>(this.url + "visiteCancellate", prenotazione);
  }

  public findVisiteCancellate(): Observable<Prenotazione[]> {
    return this.http.get<Prenotazione[]>(this.url + "visiteCancellate");
  }

  public deleteVisiteCancellate(id: number){
    return this.http.delete<Prenotazione>(this.url + "cancellaVisitaCancellata/" + id);
  }

  public saveVisiteAvvenute(prenotazione: Prenotazione) {
    return this.http.post<Prenotazione>(this.url + "visiteAvvenute", prenotazione);
  }

  public findVisiteAvvenute(): Observable<Prenotazione[]> {
    return this.http.get<Prenotazione[]>(this.url + "visiteAvvenute");
  }

  public deleteVisiteAvvenute(id: number){
    return this.http.delete<Prenotazione>(this.url + "cancellaVisitaAvvenuta/" + id);
  }

  public prendiVisitaDalVisitatore(username: string): Observable<Prenotazione[]> {
    return this.http.get<Prenotazione[]>(this.url + "prendiVisitaUtente/" + username)
  }

}
