import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PlyrComponent } from 'ngx-plyr';
import { Poesia } from '../class/poesia';
import { PoesiaService } from '../service/poesia.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-poesia-specifica',
  templateUrl: './poesia-specifica.component.html',
  styleUrls: ['./poesia-specifica.component.css']
})
export class PoesiaSpecificaComponent implements OnInit {

  constructor(private service: PoesiaService, private router: Router, private spinner: NgxSpinnerService) {}

  poesie: Poesia[]
  contatore: number
  poesiaSpecifica: Poesia[]
  poesiaAudio: Poesia
  boo1: boolean = false
  boo2: boolean = false
  titoloPoesia: string
  isText: boolean
  audio: any
  chiudiAudio: boolean = false
  retrievedAudio: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;

  spinnerIsRunning: boolean = true

  ngOnInit() {
    this.service.findAll().subscribe(poesiaSingola => {
      this.poesie = poesiaSingola
      console.log(this.poesie)
    })
  }

  prendiAudio(id: number){
    this.spinner.show();
    this.spinnerIsRunning = true
    this.service.findPoesiaSingolaById(id).subscribe(a => {
      console.log("id: ",id);
      console.log("a: ",a);
      this.service.findAudioSingoloById(a.audio_id).subscribe(audio => {
      this.retrieveResonse = audio
      this.base64Data = this.retrieveResonse.picByte
      a.retrievedAudio = 'data:audio/mp3;base64,' + this.base64Data
      this.audio = a.retrievedAudio
      this.spinner.hide();
      this.spinnerIsRunning = false
    })
    })     
  }

  filtra() {
    this.boo1 = true
    console.log(this.titoloPoesia)
    this.service.findPoesiaSingolaFiltrata(this.titoloPoesia).subscribe(poesiaSingola => {
      this.poesie = poesiaSingola
    })
  }

  differenza(event) {
    this.contatore = 0
    console.log("Evento: ", event)
  }

  bottoneTrue() {
    this.boo1 = true
    console.log(this.boo1)
  }

  bottoneFalse() {
    this.boo1 = false
  }

  // get the component instance to have access to plyr instance
  @ViewChild(PlyrComponent, { static: true })
  plyr: PlyrComponent;

  // or get it from plyrInit event
  player: Plyr;

  played(event: Plyr.PlyrEvent) {
    console.log('played', event);
  }

  play(): void {
    this.player.play(); // or this.plyr.player.play()
  }

  pause(): void {
    this.player.pause(); // or this.plyr.player.play()
  }

  stop(): void {
    this.player.stop(); // or this.plyr.player.stop()
  }

  toggle = true;
  toggle1 = true;


  status = "";
  status1 = "";

  enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? "" : "";
  }

  enableDisableRule1() {
    this.toggle1 = !this.toggle1;
    this.status1 = this.toggle1 ? "" : "";
  }

  refresh(): void {
    window.location.reload();
  }
}
