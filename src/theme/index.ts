import { extendTheme } from 'native-base';
import palette from './colors';
import typography from './fonts';

const customTheme = extendTheme({
  colors: {
    white: palette.WHITE,
    black: palette.BLACK,
    lightText: palette.WHITE,
    darkText: palette.BLACK,

    primary: palette.PRIMARY,
    secondary: palette.SECONDARY,
    border: palette.BORDER,
    grey: palette.GREY,
    purple: palette.PURPLE,
    tertiary: palette.MIDNIGHT_BLUE,

    pageBackground: palette.MIDNIGHT_BLUE,
    headerBackground: palette.WHITE,

    ...palette,
  },

  radius: {
    1: 12,
    2: 16,
  },
  ...typography,

  config: {
    // Changing initialColorMode to 'light'
    initialColorMode: 'light',
  },
});

export type Theme = typeof customTheme;
export default customTheme;
