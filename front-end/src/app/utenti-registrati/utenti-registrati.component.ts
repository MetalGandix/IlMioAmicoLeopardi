import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../class/user';
import { GestioneUtenteService } from '../service/gestione-utente.service';
import { Role } from '../class/role';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-utenti-registrati',
  templateUrl: './utenti-registrati.component.html',
  styleUrls: ['./utenti-registrati.component.css']
})
export class UtentiRegistratiComponent implements OnInit {

  constructor(private route: Router,
    private service: GestioneUtenteService, private spinner: NgxSpinnerService) { }

  admin: boolean = false
  utente: User[]

  ngOnInit() {
    this.spinner.show
    this.admin = sessionStorage.getItem("Role") === "ROLE_ADMIN"
    this.service.findAll().subscribe(data => {
      this.utente = data
      this.spinner.hide()
    })
  }

  deleteUtente(id: number) {
    var sei_sicuro = confirm('Confermare eliminazione PERMANENTE di questo utente?');
    if (sei_sicuro) {
      this.spinner.show()
      this.service.deleteUser(id).subscribe()
      this.spinner.hide()
      window.setTimeout('location.reload()', 100);
    } else {
      alert('utente NON eliminato');
    }
  }

  cambiaRuolo(id: number) {
    var sei_sicuro = confirm('Confermare nomina admin?');
    if (sei_sicuro) {
      this.spinner.show()
      this.service.changeRole(id).subscribe()
      this.spinner.hide()
      window.setTimeout('location.reload()', 100);
    } else {
      alert('utente NON nominato Admin');
    }
  }
}
