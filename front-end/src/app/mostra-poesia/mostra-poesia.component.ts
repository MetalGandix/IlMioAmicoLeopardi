import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PlyrComponent } from 'ngx-plyr';
import { Poesia } from '../class/poesia';
import { PoesiaService } from '../service/poesia.service';
import { Location } from '@angular/common';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-mostra-poesia',
  templateUrl: './mostra-poesia.component.html',
  styleUrls: ['./mostra-poesia.component.css']
})
export class MostraPoesiaComponent implements OnInit {

  constructor(private service: PoesiaService, private router: Router, private _location: Location, private spinner: NgxSpinnerService) { }

  poesie: Poesia[]
  poesiaSpecifica: Poesia[]
  isText: boolean
  poesiaAudio: Poesia
  boo1: boolean = false
  boo2: boolean = false
  prova: boolean = false
  provaNumero: number
  titoloPoesia: string
  audio: any
  retrievedAudio: any;
  base64Data: any;
  retrieveResonse: any;

  spinnerIsRunning: boolean = true

  ngOnInit() {
    this.poesie = window.history.state.poesie
    console.log(this.poesie)
  }

  prendiAudio(id: number) {
    this.spinner.show();
    this.spinnerIsRunning = true
    this.service.findPoesiaSingolaById(id).subscribe(a => {
      console.log("id: ", id);
      console.log("a: ", a);
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
    this.boo2 = true
    console.log(this.titoloPoesia)
    this.service.findPoesiaSingola(this.titoloPoesia).subscribe(poesiaSingola => {
      this.poesie = poesiaSingola
      this.poesie.forEach(a => {
        this.service.findAudioSingoloById(a.audio_id).subscribe(audio => {
          this.retrieveResonse = audio
          this.base64Data = this.retrieveResonse.picByte
          this.audio = 'data:audio/mp3;base64,' + this.base64Data
        })
      })
    })
  }

  differenza(event) {
    console.log("Evento: ", event)
  }

  goBack() {
    this._location.back();
  }

  bottoneTrue() {
    this.boo1 = true
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
}
