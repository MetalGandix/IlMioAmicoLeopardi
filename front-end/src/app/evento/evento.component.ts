import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evento } from '../class/evento';
import { Immagine } from '../class/immagine';
import { EventoService } from '../service/evento.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {
  selectedFile: File;
  http: any;
  admin: boolean = false
  evento: Evento
  showMsg: boolean = false
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;

  constructor(private service: EventoService, private router: Router, private httpClient: HttpClient) {
    this.evento = new Evento()
  }

  ngOnInit() {
    this.admin = sessionStorage.getItem("Role") === "ROLE_ADMIN"
  }

  onSubmit() {
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.httpClient.post<Immagine>('http://localhost:8080/image/upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          console.log(response)
          this.service.saveEvents({event: this.evento, imageId: response.body.id}).subscribe()
          this.message = 'Immagine caricata correttamente';
        } else {
          this.message = 'Immagine non caricata correttamente';
        }
      }
    )
    this.showMsg = true
  }

  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

}
