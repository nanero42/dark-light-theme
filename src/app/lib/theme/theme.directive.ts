import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { ThemeProperties } from './interfaces';
import { ThemeService } from './theme.service';
import { ThemeName } from './enums';

@Directive({
  selector: '[theme]',
  standalone: true
})
export class ThemeDirective implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  constructor(
    private el: ElementRef<HTMLDivElement>,
    private themeService: ThemeService,
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.themeService.getTheme$().pipe(
        tap((theme) => {
          for (const key in theme.properties) {
            const prop = key as keyof ThemeProperties;

            this.el.nativeElement.style.setProperty(key, theme.properties[prop]);
          }
        }),
      ).subscribe(),
    );

    this.setInitTheme();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s?.unsubscribe());
  }

  setInitTheme() {
    this.themeService.setTheme(ThemeName.light);
  }
}
