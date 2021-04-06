import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evento } from '../class/evento';

interface EventRequest {
  event: Evento
  imageId: number
}

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  private url: string

  constructor(private http: HttpClient) {
    this.url = 'https://api-app.centroleopardi.it:8080/';
  }

  public findEvents(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.url + "vediEventi");
  }

  public saveEvents(evento: EventRequest) {
    return this.http.post<Evento>(this.url + "inserisciEventi", evento);
  }

  public deleteEvent(id: number) {
    return this.http.delete<Evento>(this.url + "cancellaEvento/" + id);
  }
}
