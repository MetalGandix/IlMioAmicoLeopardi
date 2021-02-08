import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Contatti } from '../class/contatti';
import { ContattiService } from '../service/contatti.service';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent implements OnInit, AfterViewInit {

  messagge: Contatti
  booleanMessaggio: boolean = false 

  constructor(private service: ContattiService) { this.messagge = new Contatti() }

  ngOnInit() {

  }

  mandaMessaggio(){
    this.service.mandaMessaggio(this.messagge).subscribe()
    this.booleanMessaggio = true
  }

  ngAfterViewInit() {

  }
}