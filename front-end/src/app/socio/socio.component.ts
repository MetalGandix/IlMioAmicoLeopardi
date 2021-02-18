import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiventaSocio } from '../class/diventa-socio';
import { DiventaSocioService } from '../service/diventa-socio.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-socio',
  templateUrl: './socio.component.html',
  styleUrls: ['./socio.component.css']
})
export class SocioComponent implements OnInit {

  today: string
  todayHTML = Date.now()

  constructor(private service: DiventaSocioService, private route: ActivatedRoute, private router: Router, private spinner: NgxSpinnerService) {
    this.modulo = new DiventaSocio()
  }

  modulo: DiventaSocio
  diventaSocio: DiventaSocio[]
  logRicevuto: boolean = false

  ngOnInit() {
    this.service.vediModuli().subscribe(moduloSingolo => {
      this.diventaSocio = moduloSingolo
      console.log("Moduli: ", this.diventaSocio)
    })
  }

  OnSubmit() {
    this.spinner.show();
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    this.today = mm + '/' + dd + '/' + yyyy;
    this.modulo.dataCompilazione = today;
    this.service.mandaModulo(this.modulo).subscribe()
    this.logRicevuto = true
    this.spinner.hide();
  }
}
