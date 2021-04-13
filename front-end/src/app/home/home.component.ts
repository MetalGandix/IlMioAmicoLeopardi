import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evento } from '../class/evento';
import { Prenotazione } from '../class/prenotazione';
import { NgxSpinnerService } from "ngx-spinner";
import { EventoService } from '../service/evento.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private httpClient: HttpClient, private service: EventoService, private router: Router, private spinner: NgxSpinnerService) { }

  eventi: Evento[]
  prenotazioniEliminate: Prenotazione[]
  admin: boolean = false
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  array: any[];

  ngOnInit() {
    this.spinner.show();
    this.service.findEvents().subscribe(p => {
      this.eventi = p
      this.eventi.forEach(e => {
        this.httpClient.get("https://api-app.centroleopardi.it:8080/image/get/" + e.evento_immagine.name).subscribe(
          res => {
            this.retrieveResonse = res
            this.base64Data = this.retrieveResonse.picByte;
            e.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data
          }
        )
      })
      this.spinner.hide();
      console.log(this.eventi)
    })
  }
}
