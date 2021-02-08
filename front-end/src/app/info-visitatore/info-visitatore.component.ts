import { Component, OnInit } from '@angular/core';
import { Prenotazione } from '../class/prenotazione';
import { User } from '../class/user';
import { GestioneUtenteService } from '../service/gestione-utente.service';
import { PrenotazioneService } from '../service/prenotazione.service';

@Component({
  selector: 'app-info-visitatore',
  templateUrl: './info-visitatore.component.html',
  styleUrls: ['./info-visitatore.component.css']
})
export class InfoVisitatoreComponent implements OnInit {

  visitor: boolean = false
  constructor(private gestioneUtente: GestioneUtenteService, private service: PrenotazioneService) { }
  utente: User[]
  visita: Prenotazione[]

  ngOnInit(){
  this.visitor = sessionStorage.getItem("Role") === "ROLE_VISITATORE"
  this.gestioneUtente.findUtenteSingolo(sessionStorage.getItem('username')).subscribe(data => 
    {
      this.utente = data
      console.log(this.utente)
    })
  console.log("Session storage",sessionStorage.getItem('username'))
  this.service.prendiVisitaDalVisitatore(sessionStorage.getItem('username')).subscribe(p=>{
    this.visita = p
  })
  }
}
