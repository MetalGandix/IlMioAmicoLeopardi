import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evento } from '../class/evento';
import { Prenotazione } from '../class/prenotazione';
import { AuthenticationService } from '../service/authentication.service';
import { EventoService } from '../service/evento.service';
import { User } from '../class/user';
import { GestioneUtenteService } from '../service/gestione-utente.service';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-bacheca-eventi',
  templateUrl: './bacheca-eventi.component.html',
  styleUrls: ['./bacheca-eventi.component.css']
})
export class BachecaEventiComponent implements OnInit {

  constructor(private auth: AuthenticationService, private gestioneUtente: GestioneUtenteService, private httpClient: HttpClient, private service: EventoService, private router: Router, private spinner: NgxSpinnerService) {
  }

  admin: boolean = false
  utente: User[]
  refresha: number
  visitor: boolean = false

  eventi: Evento[]
  prenotazioniEliminate: Prenotazione[]

  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  array: any[];

  ngOnInit() {
    this.spinner.show();

    this.refresha = window.history.state.refresha
    if (this.refresha == 1) {
      this.refresha++
      window.location.reload()
    }
    if (sessionStorage.getItem("Role") === "ROLE_ADMIN") {
      this.admin = true
    } else if (sessionStorage.getItem("Role") === "ROLE_VISITATORE") {
      this.visitor = true
    }
    this.gestioneUtente.findUtenteSingolo(sessionStorage.getItem('username')).subscribe(data => {
      this.utente = data
      console.log(this.utente)
    })
    console.log("Session storage", sessionStorage.getItem('username'))

    this.service.findEvents().subscribe(p => {
      this.eventi = p
      this.eventi.forEach(e => {
        this.httpClient.get("https://api-app.centroleopardi.it:8080/image/get/" + e.evento_immagine.name).subscribe(
          res => {
            this.retrieveResonse = res
            this.base64Data = this.retrieveResonse.picByte;
            e.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data
            this.spinner.hide();

          }
        )
      })
      console.log(this.eventi)
    })
  }

  deleteEvento(id: number) {
    this.service.deleteEvent(id).subscribe()
    window.setTimeout('location.reload()', 100);
  }
}