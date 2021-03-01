import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import 'mapbox-gl-leaflet';
import { Poesia } from 'src/app/class/poesia';
import { PoesiaService } from 'src/app/service/poesia.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autografo-inno',
  templateUrl: './autografo-inno.component.html',
  styleUrls: ['../style_componenti_percorso.component.css']
})
export class AutografoInnoComponent implements OnInit, AfterViewInit {

  private map: L.Map;
  valore: number
  poesie: Poesia[]

  @ViewChild('map')
  private mapContainer: ElementRef<HTMLElement>;

  constructor(private service: PoesiaService, private router: Router, private _location: Location) { }

  ngOnInit() {
  }

  showMap(){
    var link = ""+"http://maps.google.com/maps?daddr=" + 43.4021 +"," + 13.55142;
    window.location.href = link;
  }

  ngAfterViewInit() {
    const myAPIKey = "f1148686528a4ea488296c6f9f71041d";
    const mapStyle = "https://maps.geoapify.com/v1/styles/osm-carto/style.json";

    

    const initialState = {
      lng: 13.55142,
      lat: 43.4021,
      zoom: 16
    };

    const map = new L.Map(this.mapContainer.nativeElement).setView(
      [initialState.lat, initialState.lng],
      initialState.zoom
    );

    map.attributionControl
      .setPrefix("")
      .addAttribution(
        'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | © OpenStreetMap <a href="https://www.openstreetmap.org/copyright" target="_blank">contributors</a>'
      );

    L.mapboxGL({
      style: `${mapStyle}?apiKey=${myAPIKey}`,
      accessToken: "no-token"
    }).addTo(map);

    var redIcon = new L.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    L.marker([43.4021, 13.55142], { icon: redIcon }).addTo(map);
  }

  searchByCapitolo(valore: number) {
    this.service.findPoesiaSingolaByCapitolo(12).subscribe(poesieTrovate => {
      this.poesie = poesieTrovate
      this.router.navigate(['/mostra-poesia'], {
        state: { poesie: this.poesie }
      })
    })
  }

  goBack() {
    this._location.back();
  }
}