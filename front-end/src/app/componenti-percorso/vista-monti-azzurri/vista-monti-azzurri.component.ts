import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import 'mapbox-gl-leaflet';
import { Location } from '@angular/common';


@Component({
  selector: 'app-vista-monti-azzurri',
  templateUrl: './vista-monti-azzurri.component.html',
  styleUrls: ['../style_componenti_percorso.component.css']
})
export class VistaMontiAzzurriComponent implements OnInit, AfterViewInit {

  private map: L.Map;

  @ViewChild('map')
  private mapContainer: ElementRef<HTMLElement>;

  constructor(private _location: Location) { }

  ngOnInit() {
  }
  
  showMap(){
    var link = ""+"http://maps.google.com/maps?daddr=" + 43.398230871991785 +"," + 13.54970489839643;
    window.location.href = link;
  }

  ngAfterViewInit() {
    const myAPIKey = "f1148686528a4ea488296c6f9f71041d";
    const mapStyle = "https://maps.geoapify.com/v1/styles/osm-carto/style.json";

    const initialState = {
      lng: 13.54970489839643,
      lat: 43.398230871991785,
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

    L.marker([43.398230871991785, 13.54970489839643], { icon: redIcon }).addTo(map);
  }

  goBack() {
    this._location.back();
  }
}