import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as AOS from 'aos'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(){
    AOS.init({
      delay:300,
      mirror:true,
      once:false
      
    });
    document.addEventListener('scroll',()=>{
      document.querySelector('.up')?.classList.toggle('active',window.scrollY >= 800)
    })
  }
  scrollTop(){
    window.scrollTo({top:0,behavior:'smooth'})
  }
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
  testimonialOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 900,
    navText: ['<i class="carousel-btn"><</i>',
      '<i class="carousel-btn">></i>'],
    autoplay: true,
    responsive: {
      0: {
        items: 1
      }
    },
    nav: false
  }
  services = [
    { iconName: 'https://technext.github.io/haircut/img/haircut.png', title: 'HAIRCUT', body: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam.', price: 'FROM $15' },
    { iconName: 'https://technext.github.io/haircut/img/beard-trim.png', title: 'BEARD TRIM', body: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam.', price: 'FROM $15' },
    { iconName: 'https://technext.github.io/haircut/img/mans-shave.png', title: 'MANS SHAVE', body: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam.', price: 'FROM $15' },
    { iconName: 'https://technext.github.io/haircut/img/hair-dyeing.png', title: 'HAIR DYEING', body: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam.', price: 'FROM $15' },
    { iconName: 'https://technext.github.io/haircut/img/mustache.png', title: 'MUSTACHE', body: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam.', price: 'FROM $15' },
    { iconName: 'https://technext.github.io/haircut/img/stacking.png', title: 'STACKING', body: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam.', price: 'FROM $15' },
  ]
  prices = [
    {service:'HAIRCUT',price:29},
    {service:'BEARD TRIM',price:23},
    {service:'MANS SHAVE',price:32},
    {service:'HAIR DYEING',price:12},
    {service:'MUSTACHE',price:23},
    {service:'STACKING',price:34},
  ]
  ourTeam = [
    {img:'assets/team-1.jpg',name:'Barber Name',designation:'Designation'},
    {img:'assets/team-2.jpg',name:'Barber Name',designation:'Designation'},
    {img:'assets/team-3.jpg',name:'Barber Name',designation:'Designation'},
    {img:'assets/team-4.jpg',name:'Barber Name',designation:'Designation'},

  ]
  workingHurs = [
    {week:"Monday",hour:'9 AM - 9 PM'},
    {week:"Tuesday",hour:'9 AM - 9 PM'},
    {week:"Wednesday",hour:'9 AM - 9 PM'},
    {week:"Thursday",hour:'9 AM - 9 PM'},
    {week:"Friday",hour:'9 AM - 9 PM'},
    {week:"Sat/Sun",hour:'CLOSED'},
  ]
}
