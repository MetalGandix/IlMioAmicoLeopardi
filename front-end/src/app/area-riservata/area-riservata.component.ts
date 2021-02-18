import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prenotazione } from '../class/prenotazione';
import { AuthenticationService } from '../service/authentication.service';
import { PrenotazioneService } from '../service/prenotazione.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-area-riservata',
  templateUrl: './area-riservata.component.html',
  styleUrls: ['./area-riservata.component.css']
})
export class AreaRiservataComponent implements OnInit {

  constructor(private service: PrenotazioneService, private router: Router, private spinner: NgxSpinnerService) {
  }

  prenotazione: Prenotazione[]
  prenotazioniEliminate: Prenotazione[]
  prenotazioniAvvenute: Prenotazione[]
  p: Prenotazione
  admin: boolean = false

  ngOnInit() {
    this.spinner.show();
    this.admin = sessionStorage.getItem("Role") === "ROLE_ADMIN"
    this.service.findAll().subscribe(p => {
      this.prenotazione = p
      console.log("Visite che devono avvenire: ", this.prenotazione)
    })
    this.service.findVisiteCancellate().subscribe(e => {
      this.prenotazioniEliminate = e
      console.log("Visite eliminate: ", this.prenotazioniEliminate)
    })
    this.service.findVisiteAvvenute().subscribe(e => {
      this.prenotazioniAvvenute = e
      console.log("Visite completate con successo: ", this.prenotazioniAvvenute)
      this.spinner.hide();
    })
  }

  cancellaPrenotazione(id: number) {
    this.spinner.show();
    console.log("id: ", id)
    this.service.deletePrenotazione(id).subscribe()
    setTimeout(function(){
      window.location.reload();
   }, 100);
    this.spinner.hide();
  }

  PrenotazioneCompletata(p: Prenotazione) {
    this.spinner.show();
    this.service.saveVisiteAvvenute(p).subscribe()
    setTimeout(function(){
      window.location.reload();
   }, 100);
      this.spinner.hide();
    
  }

  cancellaVisitaCancellata(id: number) {
    this.spinner.show();
    this.service.deleteVisiteCancellate(id).subscribe()
    // this.router.navigate(['/area-riservata']).then(() => {
    //   window.location.reload();
    //   this.spinner.hide();
    // });
    setTimeout(function(){
      window.location.reload();
   }, 100);
    this.spinner.hide();
  }

  send(p: Prenotazione) {
    // this.spinner.show();
    this.service.saveVisiteCancellate(p).subscribe()

    // this.router.navigate(['/area-riservata']).then(() => {
    //   window.location.reload();
    //   this.spinner.hide();
    // });
    // this.spinner.hide();
  }

  cancellaVisitaAvvenuta(id: number) {
    this.spinner.show();
    this.service.deleteVisiteAvvenute(id).subscribe()
    // this.router.navigate(['/area-riservata']).then(() => {
    //   window.location.reload();
    //   this.spinner.hide();
    // });
    setTimeout(function(){
      window.location.reload();
   }, 100);
   this.spinner.hide()
  }
}
