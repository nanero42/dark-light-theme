import { Injectable } from '@angular/core';
import { ReplaySubject, distinctUntilChanged, map } from 'rxjs';
import { ThemeName } from './enums';
import { themeEntity } from './tokens';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme$ = new ReplaySubject<ThemeName>(1);

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
