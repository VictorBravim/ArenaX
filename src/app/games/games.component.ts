// src/app/games/games.component.ts
import { Component, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
})
export class GamesComponent {
  @ViewChild('slickModal') slickModal: SlickCarouselComponent;

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
    this.slickModal.slickNext();
  }
}
