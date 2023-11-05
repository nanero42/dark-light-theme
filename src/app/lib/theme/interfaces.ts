import { ThemeName } from "./enums";

export interface Theme {
  name: ThemeName;
  properties: ThemeProperties,
}

export type ThemeEntity = {
  [key in ThemeName]: Theme;
};

export interface ThemeProperties {
  '--color-primary': string;
  '--color-color': string;
}
