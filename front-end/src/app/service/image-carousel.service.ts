import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImageCarousel } from '../class/image-carousel';

@Injectable({
  providedIn: 'root'
})
export class ImageCarouselService {

  private url: string

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/';
  }

  public findImageCarousel(): Observable<ImageCarousel[]> {
    return this.http.get<ImageCarousel[]>(this.url + "immagineCarousel");
  }


}
