import * as path from 'path';
import { generateTheme, IColorSet } from 'vscode-theme-generator';

const themeName = 'Disaster';
const colors = {
  black: '#111111',
  white: '#FFFFFF',
  blue: '#5555FF',
  red: '#FF5555',
  green: '#55FF55',
  yellow: '#FFFF33'
}

const colorSet: IColorSet = {
  base: {
    // background: "#1b2632",
    background: "#2d251a",
    foreground: "#ffffff",
    color1: "#ffb400",
    color2: "#cc2937",
    color3: "#44891a",
    color4: "#31a2f2"
  }
};

generateTheme(themeName, colorSet, path.join(__dirname, 'theme.json'));
