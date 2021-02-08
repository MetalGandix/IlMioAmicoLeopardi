import { Component, OnInit } from '@angular/core';
import { DiventaSocio } from '../class/diventa-socio';
import { DiventaSocioService } from '../service/diventa-socio.service';

@Component({
  selector: 'app-vedi-moduli-socio',
  templateUrl: './vedi-moduli-socio.component.html',
  styleUrls: ['./vedi-moduli-socio.component.css']
})
export class VediModuliSocioComponent{

  constructor(private service: DiventaSocioService) { }

  admin: boolean = false
  moduliCompilati: DiventaSocio[]
  moduliVisti: boolean
  moduliDaVedere: boolean

  ngOnInit(){
    this.admin = sessionStorage.getItem("Role") === "ROLE_ADMIN"
    this.service.vediModuli().subscribe(modulo => {
      this.moduliCompilati = modulo
    })
  }
    
  deleteModulo(id: number){
    this.service.eliminaModulo(id).subscribe()
    window.location.reload()
  }

  moduliNonCofermati(){
    this.moduliDaVedere = true;
    this.moduliVisti = false;
  }

  moduliCofermati(){
    this.moduliDaVedere = false;
    this.moduliVisti = true;
  }
}
