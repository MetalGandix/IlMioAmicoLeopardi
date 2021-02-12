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
    this.url = 'http://159.89.22.125:8080/giacomoLeopardi/';
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
