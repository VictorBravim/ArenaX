// src/app/games/games.component.ts
import { Component, Inject, PLATFORM_ID, HostListener, ViewChild } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SlickCarouselComponent, SlickCarouselModule } from 'ngx-slick-carousel';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './games.component.html',
  styleUrls: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GamesComponent {
  isMobile = false;
  backgroundImage = '';

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      this.updateBackgroundImage();
    }
  }

  get backgroundImageStyle() {
    return isPlatformBrowser(this.platformId) ? { 'background-image': `url(${this.backgroundImage})` } : {};
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (isPlatformBrowser(this.platformId)) {
      this.updateBackgroundImage();
    }
  }

  updateBackgroundImage() {
    this.isMobile = window.innerWidth <= 768;
    this.backgroundImage = this.isMobile ? 'assets/images/bg-mobile2.png' : 'assets/images/bg2.png';
  }

  @ViewChild('slickModal') slickModal: SlickCarouselComponent | null = null;

  carros = [
    {
      nome: 'Audi A4 Comum',
      imagem: 'assets/A4.png',
      preco: 'R$ 1.200',
    },
    {
      nome: 'Audi R8 Esportivo',
      imagem: 'assets/R8.png',
      preco: 'R$ 5.000',
    },
    {
      nome: 'Audi Q7 Esportivo',
      imagem: 'assets/Q7.png',
      preco: 'R$ 4.000',
    },
    {
      nome: 'Audi Q3 Comun',
      imagem: 'assets/Q3.png',
      preco: 'R$ 2.000',
    },
    {
      nome: 'Audi TT Esportivo',
      imagem: 'assets/TT.png',
      preco: 'R$ 2.500',
    },
  ];

  sliderConfig = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  nextSlide() {
    this.slickModal?.slickNext();
  }
}
