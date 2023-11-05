import { Directive, ElementRef, OnInit } from '@angular/core';
import { ThemeService } from './theme.service';
import { tap } from 'rxjs';
import { themeEntity } from './tokens';
import { ThemeProperties } from './interfaces';

@Directive({
  selector: '[theme]',
  standalone: true
})
export class ThemeDirective implements OnInit {

  constructor(
    private el: ElementRef<HTMLDivElement>,
    private themeService: ThemeService,
  ) { }

  ngOnInit(): void {
    this.themeService.activeThemeName$.asObservable().pipe(
      tap((name) => {
        for (const key in themeEntity[name].properties) {
          const prop = key as keyof ThemeProperties;

          this.el.nativeElement.style.setProperty(key, themeEntity[name].properties[prop]);
        }
      }),
    ).subscribe();
  }
}
