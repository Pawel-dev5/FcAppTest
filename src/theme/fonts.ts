const typography = {
  letterSpacings: {
    xs: '-0.05em',
    sm: '-0.025em',
    md: 0,
    lg: '0.025em',
    xl: '0.05em',
    '2xl': '0.1em',
  },
  lineHeights: {
    xxs: '1em',
    xs: '1.125em',
    sm: '1.25em',
    md: '1.375em',
    lg: '1.5em',
    xl: '1.75em',
    '2xl': '2em',
    '3xl': '2.5em',
    '4xl': '3em',
    '5xl': '4em',
  },
  fontConfig: {
    Aeonik: {
      100: {
        normal: 'Aeonik-Thin',
        italic: 'Aeonik-ThinItalic',
      },
      300: {
        normal: 'Aeonik-Light',
        italic: 'Aeonik-LightItalic',
      },
      400: {
        normal: 'Aeonik-Regular',
        italic: 'Aeonik-Italic',
      },
      700: {
        normal: 'Aeonik-Bold',
        italic: 'Aeonik-BoldItalic',
      },
      900: {
        normal: 'Aeonik-Black',
        italic: 'Aeonik-BlackItalic',
      },
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: 'Aeonik',
    body: 'Aeonik',
    mono: 'Aeonik',
  },

  fontSizes: {
    xxs: 10,
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
    '6xl': 60,
    '7xl': 72,
    '8xl': 96,
    '9xl': 128,
  },
};

export default typography;
