import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { HeroComponent } from './hero/hero.component';
import { GamesComponent } from './games/games.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavComponent, HeroComponent, GamesComponent, AboutComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'arenax';
}
