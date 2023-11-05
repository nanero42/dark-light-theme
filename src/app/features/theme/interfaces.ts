export interface Theme {
  name: ThemeName;
  properties: ThemeProperties,
}

export type ThemeEntity = {
  [key in ThemeName]: Theme;
};

export enum ThemeName {
  light = 'light',
  dark = 'dark',
  alter = 'alter',
}

export interface ThemeProperties {
  '--color-primary': string;
  '--color-color': string;
}
