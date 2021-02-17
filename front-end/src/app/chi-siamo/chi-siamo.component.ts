import { Component, OnInit } from '@angular/core';
import { ImageCarouselService } from '../service/image-carousel.service'
import { ImageCarousel } from '../class/image-carousel';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-chi-siamo',
  templateUrl: './chi-siamo.component.html',
  styleUrls: ['./chi-siamo.component.css']
})
export class ChiSiamoComponent implements OnInit {

  imageCarousel: ImageCarousel[]

  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  array: any[];


  constructor(private service: ImageCarouselService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.service.findImageCarousel().subscribe(i => {
      this.imageCarousel = i
      this.imageCarousel.forEach(a => {
        this.retrieveResonse = a
        this.base64Data = this.retrieveResonse.picByte
        a.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data
        this.spinner.hide();
      })
    })
  }
}