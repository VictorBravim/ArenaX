import { Component, Inject, PLATFORM_ID} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
  backgroundImage = 'assets/images/bg2.png';

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  get backgroundImageStyle() {
    return isPlatformBrowser(this.platformId) ? { 'background-image': `url(${this.backgroundImage})` } : {};
  }

  games = [
    { name: 'Genshin Impact', image: 'assets/images/genshin.png' },
    { name: 'Honkai Star Rail', image: 'assets/images/star.png' },
    { name: 'Valorant', image: 'assets/images/valorant.png' },
    { name: 'League of Legends', image: 'assets/images/league.png' },
    { name: 'Fortnite', image: 'assets/images/fortnite.png' },
    { name: 'Tower of Fantasy', image: 'assets/images/tower.png' },
  ];

  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % Math.ceil(this.games.length / 3);
    this.updateTransform();
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + Math.ceil(this.games.length / 3)) % Math.ceil(this.games.length / 3);
    this.updateTransform();
  }

  updateTransform() {
    const carousel = document.querySelector('.carousel') as HTMLElement;
    const offset = -this.currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
  }
}
