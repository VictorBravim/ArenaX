import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
  games = [
    { name: 'Game 1', image: 'assets/images/game1.jpg' },
    { name: 'Game 2', image: 'assets/images/game2.jpg' },
    { name: 'Game 3', image: 'assets/images/game3.jpg' },
  ];

  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.games.length;
    this.updateTransform();
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.games.length) % this.games.length;
    this.updateTransform();
  }

  updateTransform() {
    const carousel = document.querySelector('.carousel') as HTMLElement;
    const offset = -this.currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
  }
}
