import { Component } from '@angular/core';

interface CardProps {
  titulo: string;
  imagem: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  cards: CardProps[] = [
    {
      titulo: 'Card Superior',
      imagem: 'assets/images/banner1.png',
    },
    {
      titulo: 'Card Inferior Esquerdo',
      imagem: 'assets/images/banner2.png',
    },
    {
      titulo: 'Card Inferior Direito',
      imagem: 'assets/images/banner3.png',
    },
  ];
}
