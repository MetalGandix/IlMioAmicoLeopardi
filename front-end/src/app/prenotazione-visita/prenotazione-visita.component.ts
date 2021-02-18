import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { stringify } from 'querystring';
import { Prenotazione } from '../class/prenotazione';
import { PrenotazioneService } from '../service/prenotazione.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-prenotazione-visita',
  templateUrl: './prenotazione-visita.component.html',
  styleUrls: ['./prenotazione-visita.component.css']
})
export class PrenotazioneVisitaComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: PrenotazioneService, private spinner: NgxSpinnerService) {
    this.prenotazione = new Prenotazione()
  }

  loginEffettuato: boolean = false
  logRicevuto: boolean = false
  prenotazione: Prenotazione
  visitor: boolean = false
  input: boolean = false

  ngOnInit() {
    this.visitor = sessionStorage.getItem("Role") === "ROLE_VISITATORE"
  }

  onSubmit() {
    this.spinner.show();
    this.service.save(this.prenotazione).subscribe()
    this.logRicevuto = true
    this.spinner.hide();
  }

  apriInput() {
    this.input = true
    console.log(this.input)
  }

  onChange(value: string) {
    if (value == " ") {
      this.input = true
    }
    else if (value == "Gruppi scolastici" || value == "Universitari" || value == "Associazioni culturali" || value == "Turisti") {
      this.input = false
    }
  }

}
