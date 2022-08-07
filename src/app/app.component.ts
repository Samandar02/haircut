import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  heroOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 900,
    navText: ['<i class="carousel-btn"><</i>',
      '<i class="carousel-btn">></i>'],
    autoplay: true,
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }
  
}
