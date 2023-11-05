import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { ThemeName } from './interfaces';
import { themeEntity } from './tokens';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  activeThemeName$ = new BehaviorSubject(ThemeName.light);
  activeTheme$ = this.activeThemeName$.asObservable().pipe(
    map((name) => themeEntity[name]),
  );

  constructor() { }

  setActiveTheme(name: ThemeName) {
    this.activeThemeName$.next(name);
  }
}
