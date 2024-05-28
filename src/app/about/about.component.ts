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
      imagem: 'assets/images/star.png',
    },
    {
      titulo: 'Card Inferior Esquerdo',
      imagem: 'assets/images/star.png',
    },
    {
      titulo: 'Card Inferior Direito',
      imagem: 'assets/images/star.png',
    },
  ];
}
