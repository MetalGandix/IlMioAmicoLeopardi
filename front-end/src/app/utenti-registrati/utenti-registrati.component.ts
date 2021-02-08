import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../class/user';
import { GestioneUtenteService } from '../service/gestione-utente.service';
import { Role } from '../class/role';


@Component({
  selector: 'app-utenti-registrati',
  templateUrl: './utenti-registrati.component.html',
  styleUrls: ['./utenti-registrati.component.css']
})
export class UtentiRegistratiComponent implements OnInit {

  constructor(private route: Router,
    private service: GestioneUtenteService) { }

  admin: boolean = false
  utente: User[]
  bottone:boolean = false

  ngOnInit() {
    this.admin = sessionStorage.getItem("Role") === "ROLE_ADMIN"
    this.service.findAll().subscribe(data => 
    {
      this.utente = data
    })
  }

  deleteUtente(id: number){
    this.service.deleteUser(id).subscribe()
    window.location.reload();
  }

  cambiaRuolo(id: number){
    this.service.changeRole(id).subscribe()
    window.location.reload();
  }
}
