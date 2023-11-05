import { Theme, ThemeEntity, ThemeName } from "./interfaces"

export const light: Theme = {
  name: ThemeName.light,
  properties: {
    '--color-primary': 'red',
    '--color-color': 'orange',
  }
}

export const dark: Theme = {
  name: ThemeName.dark,
  properties: {
    '--color-primary': 'black',
    '--color-color': 'blue',
  }
}

export const alter: Theme = {
  name: ThemeName.alter,
  properties: {
    '--color-primary': 'yellow',
    '--color-color': 'green',
  }
}

export const themeEntity: ThemeEntity = {
  light,
  dark,
  alter,
}
