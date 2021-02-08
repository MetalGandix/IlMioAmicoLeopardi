import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../class/user';
import { AuthenticationService } from '../service/authentication.service';
import { GestioneUtenteService } from '../service/gestione-utente.service';

@Component({
  selector: 'app-scelta-utente',
  templateUrl: './scelta-utente.component.html',
  styleUrls: ['./scelta-utente.component.css']
})
export class SceltaUtenteComponent implements OnInit {

  admin: boolean = false
  visitor: boolean = false
  refresha: number
  utente: User[]

  constructor(private auth: AuthenticationService, private gestioneUtente: GestioneUtenteService) { }

  ngOnInit() {
    this.refresha = window.history.state.refresha
    if(this.refresha == 1){
      this.refresha++
      window.location.reload()
    }
    if(sessionStorage.getItem("Role") === "ROLE_ADMIN"){
    this.admin = true
    }else if(sessionStorage.getItem("Role") === "ROLE_VISITATORE"){
    this.visitor = true
    }
    this.gestioneUtente.findUtenteSingolo(sessionStorage.getItem('username')).subscribe(data => 
      {
        this.utente = data
        console.log(this.utente)
      })
    console.log("Session storage",sessionStorage.getItem('username'))
  }

}
