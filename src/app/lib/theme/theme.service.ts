import { Injectable } from '@angular/core';
import { Subject, distinctUntilChanged, map } from 'rxjs';
import { themeEntity } from './tokens';
import { ThemeName } from './enums';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme$ = new Subject<ThemeName>();

  constructor() { }

  setTheme(name: ThemeName) {
    this.theme$.next(name);
  }

  getTheme$() {
    return this.theme$.asObservable().pipe(
      distinctUntilChanged(),
      map((name) => themeEntity[name]),
    );
  }
}
