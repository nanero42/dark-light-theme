import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './features/theme/theme.service';
import { ThemeDirective } from './features/theme/theme.directive';
import { ThemeName } from './features/theme/interfaces';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ThemeDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'theme';
  activeTheme$ = this.themeService.activeTheme$;

  readonly ThemeName = ThemeName;

  constructor(
    private themeService: ThemeService
  ) {}

  setActiveTheme(name: ThemeName) {
    this.themeService.setActiveTheme(name);
  }
}
