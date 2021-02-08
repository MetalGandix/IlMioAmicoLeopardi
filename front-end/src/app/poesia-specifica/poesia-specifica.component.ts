import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PlyrComponent } from 'ngx-plyr';
import { Poesia } from '../class/poesia';
import { PoesiaService } from '../service/poesia.service';

@Component({
  selector: 'app-poesia-specifica',
  templateUrl: './poesia-specifica.component.html',
  styleUrls: ['./poesia-specifica.component.css']
})
export class PoesiaSpecificaComponent implements OnInit {

  constructor(private service: PoesiaService, private router: Router) {
  }

  poesie: Poesia[]
  poesiaSpecifica: Poesia[]
  boo1: boolean = false
  boo2: boolean = false
  titoloPoesia: string
  isText: boolean

  retrievedAudio: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;

  ngOnInit() {
    this.service.findAll().subscribe(poesiaSingola => {
      this.poesie = poesiaSingola
      this.poesie.forEach(a => {
        this.retrieveResonse = a.poesia_audio
        this.base64Data = this.retrieveResonse.picByte
        a.retrievedAudio = 'data:audio/mp3;base64,' + this.base64Data
      })
      console.log(this.poesie)
    })
  }

  filtra() {
    this.boo1 = true
    console.log(this.titoloPoesia)
    this.service.findPoesiaSingolaFiltrata(this.titoloPoesia).subscribe(poesiaSingola => {
      this.poesie = poesiaSingola
      this.poesie.forEach(a => {
        this.retrieveResonse = a.poesia_audio
        this.base64Data = this.retrieveResonse.picByte
        a.retrievedAudio = 'data:audio/mp3;base64,' + this.base64Data
      })
    })
  }

  differenza(event) {
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
