import { Component, OnInit } from '@angular/core';
import { DiventaSocio } from '../class/diventa-socio';
import { DiventaSocioService } from '../service/diventa-socio.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ModuliConfermati } from '../class/moduli-confermati';

@Component({
  selector: 'app-vedi-moduli-socio',
  templateUrl: './vedi-moduli-socio.component.html',
  styleUrls: ['./vedi-moduli-socio.component.css']
})
export class VediModuliSocioComponent{

  constructor(private service: DiventaSocioService, private spinner: NgxSpinnerService) { }

  admin: boolean = false
  moduliCompilati: DiventaSocio[]
  modulo: ModuliConfermati
  moduliConfermatiArray: ModuliConfermati[]
  moduliVisti: boolean
  moduliDaVedere: boolean
  vediConfermati: boolean

  ngOnInit(){
    this.spinner.show()
    this.admin = sessionStorage.getItem("Role") === "ROLE_ADMIN"
    this.service.vediModuli().subscribe(modulo => {
      this.moduliCompilati = modulo
    })
    this.service.vediModuliConfermati().subscribe(a => {
      this.moduliConfermatiArray = a
      this.spinner.hide()
    })
  }
    
  deleteModulo(id: number){
    this.service.eliminaModulo(id).subscribe()
    setTimeout(function(){
      window.location.reload();
   }, 100);
    this.spinner.hide();
  }

  sendModulo(modulo){
    this.service.mandaModuloConfermato(modulo).subscribe()
    this.service.eliminaModulo(modulo.id).subscribe()
    setTimeout(function(){
      window.location.reload();
   }, 100);
    this.spinner.hide();
  }

  moduliNonCofermati(){
    this.moduliDaVedere = true;
    this.vediConfermati = false;
  }

  moduliCofermati(){
    this.moduliDaVedere = false;
    this.vediConfermati = true;
  }
}
