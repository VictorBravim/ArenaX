import { Component, Inject, PLATFORM_ID, HostListener } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: []
})
export class HeroComponent {
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
    this.backgroundImage = this.isMobile ? 'assets/images/bg-mobile.png' : 'assets/images/bg.png';

  }
}
