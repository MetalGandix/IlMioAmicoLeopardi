import { TestBed } from '@angular/core/testing';

import { ImageCarouselService } from './image-carousel.service';

describe('ImageCarouselService', () => {
  let service: ImageCarouselService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageCarouselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
