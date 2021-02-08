import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlyrComponent } from 'ngx-plyr';
import * as Plyr from 'plyr';
import { Poesia } from '../class/poesia';
import { PoesiaService } from '../service/poesia.service';

@Component({
  selector: 'app-poesia',
  templateUrl: './poesia.component.html',
  styleUrls: ['./poesia.component.css']
})
export class PoesiaComponent{

  constructor(private service: PoesiaService,private router: Router){
  }

  isTextVisible = true; //da controllare se questa variabile serve ancora
  valore: number
  poesie: Poesia[]

  searchByCapitolo(valore: number){
    if(valore == 1){
      this.service.findPoesiaSingolaByCapitolo(1).subscribe(poesieTrovate => {
        this.poesie = poesieTrovate
        this.router.navigate(['/mostra-poesia'], {
          state: { poesie: this.poesie }
        })
      })
    }
    if(valore == 2){
      this.service.findPoesiaSingolaByCapitolo(2).subscribe(poesieTrovate => {
        this.poesie = poesieTrovate
        this.router.navigate(['/mostra-poesia'], {
          state: { poesie: this.poesie }
        })
      })
    }
    if(valore == 3){
      this.service.findPoesiaSingolaByCapitolo(3).subscribe(poesieTrovate => {
        this.poesie = poesieTrovate
        this.router.navigate(['/mostra-poesia'], {
          state: { poesie: this.poesie }
        })
      })
    }
    if(valore == 4){
      this.service.findPoesiaSingolaByCapitolo(4).subscribe(poesieTrovate => {
        this.poesie = poesieTrovate
        this.router.navigate(['/mostra-poesia'], {
          state: { poesie: this.poesie }
        })
      })
    }
    if(valore == 7){
      this.service.findPoesiaSingolaByCapitolo(7).subscribe(poesieTrovate => {
        this.poesie = poesieTrovate
        this.router.navigate(['/mostra-poesia'], {
          state: { poesie: this.poesie }
        })
      })
    }
    if(valore == 8){
      this.service.findPoesiaSingolaByCapitolo(8).subscribe(poesieTrovate => {
        this.poesie = poesieTrovate
        this.router.navigate(['/mostra-poesia'], {
          state: { poesie: this.poesie }
        })
      })
    }
    if(valore == 9){
      this.service.findPoesiaSingolaByCapitolo(9).subscribe(poesieTrovate => {
        this.poesie = poesieTrovate
        this.router.navigate(['/mostra-poesia'], {
          state: { poesie: this.poesie }
        })
      })
    }
    if(valore == 10){
      this.service.findPoesiaSingolaByCapitolo(10).subscribe(poesieTrovate => {
        this.poesie = poesieTrovate
        this.router.navigate(['/mostra-poesia'], {
          state: { poesie: this.poesie }
        })
      })
    }
    if(valore == 11){
      this.service.findPoesiaSingolaByCapitolo(11).subscribe(poesieTrovate => {
        this.poesie = poesieTrovate
        this.router.navigate(['/mostra-poesia'], {
          state: { poesie: this.poesie }
        })
      })
    }
    if(valore == 12){
      this.service.findPoesiaSingolaByCapitolo(12).subscribe(poesieTrovate => {
        this.poesie = poesieTrovate
        this.router.navigate(['/mostra-poesia'], {
          state: { poesie: this.poesie }
        })
      })
    }
    if(valore == 13){
      this.service.findPoesiaSingolaByCapitolo(13).subscribe(poesieTrovate => {
        this.poesie = poesieTrovate
        this.router.navigate(['/mostra-poesia'], {
          state: { poesie: this.poesie }
        })
      })
    }
    console.log(valore)
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

  toggle = true; toggle1 = true; toggle2 = true; toggle3 = true; toggle4 = true; toggle5 = true; toggle6 = true; toggle7 = true; toggle8 = true; toggle9 = true; toggle10 = true; toggle11 = true; toggle12 = true; toggle13 = true;
  toggle14 = true; toggle15 = true; toggle16 = true; toggle17 = true; toggle18 = true; toggle19 = true; toggle20 = true; toggle21 = true; toggle22 = true; toggle23 = true; toggle24 = true; toggle25 = true; toggle26 = true;
  toggle27 = true; toggle28 = true; toggle29 = true; toggle30 = true; toggle31 = true; toggle32 = true; toggle33 = true; toggle34 = true; toggle35 = true; toggle36 = true; toggle37 = true; toggle38 = true; toggle39 = true;
  toggle40 = true; toggle41 = true; toggle42 = true; toggle43 = true; toggle44 = true; toggle45 = true; toggle46 = true; toggle47 = true; toggle48 = true; toggle49 = true; toggle50 = true; toggle51 = true;

  
  status = ""; status1 = ""; status2 = ""; status3 = ""; status4 = ""; status5 = ""; status6 = ""; status7 = ""; status8 = ""; status9 = ""; status10 = ""; status11 = ""; status12 = ""; status13 = ""; status14 = ""; status15 = "";
  status16 = ""; status17 = ""; status18 = ""; status19 = ""; status20 = ""; status21 = ""; status22 = ""; status23 = ""; status24 = ""; status25 = ""; status26 = ""; status27 = ""; status28 = ""; status29 = ""; status30 = "";
  status31 = ""; status32 = ""; status33 = ""; status34 = ""; status35 = ""; status36 = ""; status37 = ""; status38 = ""; status39 = ""; status40 = ""; status41 = ""; status42 = ""; status43 = ""; status44 = ""; status45 = "";
  status46 = ""; status47 = ""; status48 = ""; status49 = ""; status50 = ""; status51 = "";
  
  enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? "" : "";
  }
  enableDisableRule1() {
    this.toggle1 = !this.toggle1;
    this.status1 = this.toggle1 ? "" : "";
  }
  enableDisableRule2() {
    this.toggle2 = !this.toggle2;
    this.status2 = this.toggle2 ? "" : "";
  }
  enableDisableRule3() {
    this.toggle3 = !this.toggle3;
    this.status3 = this.toggle3 ? "" : "";
  }
  enableDisableRule4() {
    this.toggle4 = !this.toggle4;
    this.status4 = this.toggle4 ? "" : "";
  }
  enableDisableRule5() {
    this.toggle5 = !this.toggle5;
    this.status5 = this.toggle5 ? "" : "";
  }
  enableDisableRule6() {
    this.toggle6 = !this.toggle6;
    this.status6 = this.toggle6 ? "" : "";
  }
  enableDisableRule7() {
    this.toggle7 = !this.toggle7;
    this.status7 = this.toggle7 ? "" : "";
  }
  enableDisableRule8() {
    this.toggle8 = !this.toggle8;
    this.status8 = this.toggle8 ? "" : "";
  }
  enableDisableRule9() {
    this.toggle9 = !this.toggle9;
    this.status9 = this.toggle9 ? "" : "";
  }
  enableDisableRule10() {
    this.toggle10 = !this.toggle10;
    this.status10 = this.toggle10 ? "" : "";
  }
  enableDisableRule11() {
    this.toggle11 = !this.toggle11;
    this.status11 = this.toggle11 ? "" : "";
  }
  enableDisableRule12() {
    this.toggle12 = !this.toggle12;
    this.status12 = this.toggle12 ? "" : "";
  }
  enableDisableRule13() {
    this.toggle13 = !this.toggle13;
    this.status13 = this.toggle13 ? "" : "";
  }
  enableDisableRule14() {
    this.toggle14 = !this.toggle14;
    this.status14 = this.toggle14 ? "" : "";
  }
  enableDisableRule15() {
    this.toggle15 = !this.toggle15;
    this.status15 = this.toggle15 ? "" : "";
  }
  enableDisableRule16() {
    this.toggle16 = !this.toggle16;
    this.status16 = this.toggle16 ? "" : "";
  }
  enableDisableRule17() {
    this.toggle17 = !this.toggle17;
    this.status17 = this.toggle17 ? "" : "";
  }
  enableDisableRule18() {
    this.toggle18 = !this.toggle18;
    this.status18 = this.toggle18 ? "" : "";
  }
  enableDisableRule19() {
    this.toggle19 = !this.toggle19;
    this.status19 = this.toggle19 ? "" : "";
  }
  enableDisableRule20() {
    this.toggle20 = !this.toggle20;
    this.status20 = this.toggle20 ? "" : "";
  }
  enableDisableRule21() {
    this.toggle21 = !this.toggle21;
    this.status21 = this.toggle21 ? "" : "";
  }
  enableDisableRule22() {
    this.toggle22 = !this.toggle22;
    this.status22 = this.toggle22 ? "" : "";
  }
  enableDisableRule23() {
    this.toggle23 = !this.toggle23;
    this.status23 = this.toggle23 ? "" : "";
  }
  enableDisableRule24() {
    this.toggle24 = !this.toggle24;
    this.status24 = this.toggle24 ? "" : "";
  }
  enableDisableRule25() {
    this.toggle25 = !this.toggle25;
    this.status25 = this.toggle25 ? "" : "";
  }
  enableDisableRule26() {
    this.toggle26 = !this.toggle26;
    this.status26 = this.toggle26 ? "" : "";
  }
  enableDisableRule27() {
    this.toggle27 = !this.toggle27;
    this.status27 = this.toggle27 ? "" : "";
  }
  enableDisableRule28() {
    this.toggle28 = !this.toggle28;
    this.status28 = this.toggle28 ? "" : "";
  }  
  enableDisableRule29() {
    this.toggle29 = !this.toggle29;
    this.status29 = this.toggle29 ? "" : "";
  }
  enableDisableRule30() {
    this.toggle30 = !this.toggle30;
    this.status30 = this.toggle30 ? "" : "";
  }
  enableDisableRule31() {
    this.toggle31 = !this.toggle31;
    this.status31 = this.toggle31 ? "" : "";
  }
  enableDisableRule32() {
    this.toggle32 = !this.toggle32;
    this.status32 = this.toggle32 ? "" : "";
  }
  enableDisableRule33() {
    this.toggle33 = !this.toggle33;
    this.status33 = this.toggle33 ? "" : "";
  }
  enableDisableRule34() {
    this.toggle34 = !this.toggle34;
    this.status34 = this.toggle34 ? "" : "";
  }
  enableDisableRule35() {
    this.toggle35 = !this.toggle35;
    this.status35 = this.toggle35 ? "" : "";
  }
  enableDisableRule36() {
    this.toggle36 = !this.toggle36;
    this.status36 = this.toggle36 ? "" : "";
  }
  enableDisableRule37() {
    this.toggle37 = !this.toggle37;
    this.status37 = this.toggle37 ? "" : "";
  }
  enableDisableRule38() {
    this.toggle38 = !this.toggle38;
    this.status38 = this.toggle38 ? "" : "";
  }
  enableDisableRule39() {
    this.toggle39 = !this.toggle39;
    this.status39 = this.toggle39 ? "" : "";
  }
  enableDisableRule40() {
    this.toggle40 = !this.toggle40;
    this.status40 = this.toggle40 ? "" : "";
  }
  enableDisableRule41() {
    this.toggle41 = !this.toggle41;
    this.status41 = this.toggle41 ? "" : "";
  }
  enableDisableRule42() {
    this.toggle42 = !this.toggle42;
    this.status42 = this.toggle42 ? "" : "";
  }
  enableDisableRule43() {
    this.toggle43 = !this.toggle43;
    this.status43 = this.toggle43 ? "" : "";
  }
  enableDisableRule44() {
    this.toggle44 = !this.toggle44;
    this.status44 = this.toggle44 ? "" : "";
  }
  enableDisableRule45() {
    this.toggle45 = !this.toggle45;
    this.status45 = this.toggle45 ? "" : "";
  }
  enableDisableRule46() {
    this.toggle46 = !this.toggle46;
    this.status46 = this.toggle46 ? "" : "";
  }
  enableDisableRule47() {
    this.toggle47 = !this.toggle47;
    this.status47 = this.toggle47 ? "" : "";
  }
  enableDisableRule48() {
    this.toggle48 = !this.toggle48;
    this.status48 = this.toggle48 ? "" : "";
  }
  enableDisableRule49() {
    this.toggle49 = !this.toggle49;
    this.status49 = this.toggle49 ? "" : "";
  }
  enableDisableRule50() {
    this.toggle50 = !this.toggle50;
    this.status50 = this.toggle50 ? "" : "";
  }
  enableDisableRule51() {
    this.toggle51 = !this.toggle51;
    this.status51 = this.toggle51 ? "" : "";
  }
}