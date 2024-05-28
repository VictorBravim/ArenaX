import { Component, Inject, PLATFORM_ID, HostListener } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
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
