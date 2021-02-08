import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prenotazione } from '../class/prenotazione';
import { AuthenticationService } from '../service/authentication.service';
import { PrenotazioneService } from '../service/prenotazione.service';

@Component({
  selector: 'app-area-riservata',
  templateUrl: './area-riservata.component.html',
  styleUrls: ['./area-riservata.component.css']
})
export class AreaRiservataComponent implements OnInit {

  constructor(private service: PrenotazioneService, private router: Router) {
   }

  prenotazione: Prenotazione[]
  prenotazioniEliminate: Prenotazione[]
  prenotazioniAvvenute: Prenotazione[]
  p: Prenotazione
  admin: boolean = false

  ngOnInit() {
  this.admin = sessionStorage.getItem("Role") === "ROLE_ADMIN"
    this.service.findAll().subscribe(p => 
      {
        this.prenotazione = p
        console.log("Visite che devono avvenire: ",this.prenotazione)
      })
    this.service.findVisiteCancellate().subscribe(e => {
        this.prenotazioniEliminate = e
        console.log("Visite eliminate: ",this.prenotazioniEliminate)
    })
    this.service.findVisiteAvvenute().subscribe(e => {
      this.prenotazioniAvvenute = e
      console.log("Visite completate con successo: ",this.prenotazioniAvvenute)
  })
  }

  cancellaPrenotazione(id: number){
    console.log("id: ",id)
    this.service.deletePrenotazione(id).subscribe()
  }

  PrenotazioneCompletata(p: Prenotazione){
    this.service.saveVisiteAvvenute(p).subscribe()
    this.router.navigate(['/area-riservata']).then(() => {
      window.location.reload();
    });
  }

  cancellaVisitaCancellata(id: number){
    this.service.deleteVisiteCancellate(id).subscribe()
    this.router.navigate(['/area-riservata']).then(() => {
      window.location.reload();
    });
  }

  send(p: Prenotazione){
    this.service.saveVisiteCancellate(p).subscribe()
    this.router.navigate(['/area-riservata']).then(() => {
      window.location.reload();
    });
  }

  cancellaVisitaAvvenuta(id: number){
    this.service.deleteVisiteAvvenute(id).subscribe()
    this.router.navigate(['/area-riservata']).then(() => {
      window.location.reload();
    });
  }
}
