import { ThemeName } from "./enums"
import { Theme, ThemeEntity } from "./interfaces"

const light: Theme = {
  name: ThemeName.light,
  properties: {
    '--color-primary': 'red',
    '--color-color': 'orange',
  }
}

const dark: Theme = {
  name: ThemeName.dark,
  properties: {
    '--color-primary': 'black',
    '--color-color': 'blue',
  }
}

const alter: Theme = {
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
