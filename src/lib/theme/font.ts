import { Sizes } from './size';

export interface Weights {
  thin?: number;
  light?: number;
  regular?: number;
  medium?: number;
  semiBold?: number;
  bold?: number;
}

export interface Font {
  fontFamily?: string;
  fontSize?: Sizes;
  fontWeight?: Weights;
  letterSpacing?: number | string;
  lineHeight?: number | string;
}

export interface Fonts {
  sans: Font;
  serif: Font;
  tabular: Font;
  mono: Font;
  title: Font;
}

/* Convert to rem model?

    size: {
      base: '16px',
      h1: {
        default: '2.75rem',
        small: '1.75rem',
      },
      h2: {
        default: '2rem',
        small: '1.25rem',
      },
      h3: {
        default: '1.5rem',
        small: '1rem',
      },
      h4: {
        default: '1.25rem',
        small: '0.875rem',
      },
      h5: {
        default: '1rem',
        small: '0.775rem',
      },
      h6: {
        default: '0.875rem',
        small: '0.665rem',
      },
      p: {
        default: '0.875rem',
        small: '0.665rem',
      }
    },

*/
export const fontSizeDefaults = {
  S: 9,
  M: 12,
  L: 16,
  XL: 18,
  XXL: 24,
};
export const fontWeightDefaults = {
  thin: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
};

export const fontFamilyDefaults = {
  sans: 'Roboto, Helvetica, Arial, sans-serif',
  serif: 'Georgia, Times, serif',
  mono: 'Courier New, Courier',
  tabular: 'Montserrat, Lato, Roboto, sans-serif',
  title: 'Impact, Garamond, Palatino',
};

export const fontDefaults: Fonts = {
  sans: {
    fontFamily: fontFamilyDefaults.sans,
    fontSize: fontSizeDefaults,
    fontWeight: fontWeightDefaults,
    letterSpacing: 'normal',
    lineHeight: 'normal',
  },
  serif: {
    fontFamily: fontFamilyDefaults.serif,
    fontSize: fontSizeDefaults,
    fontWeight: fontWeightDefaults,
    letterSpacing: 'normal',
    lineHeight: 'normal',
  },
  mono: {
    fontFamily: fontFamilyDefaults.mono,
    fontSize: fontSizeDefaults,
    fontWeight: fontWeightDefaults,
    letterSpacing: 'normal',
    lineHeight: 'normal',
  },
  tabular: {
    fontFamily: fontFamilyDefaults.tabular,
    fontSize: fontSizeDefaults,
    fontWeight: fontWeightDefaults,
    letterSpacing: 'normal',
    lineHeight: 'normal',
  },
  title: {
    fontFamily: fontFamilyDefaults.title,
    fontSize: fontSizeDefaults,
    fontWeight: fontWeightDefaults,
    letterSpacing: 'normal',
    lineHeight: 'normal',
  },
};

