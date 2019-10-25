
/** This could be implemented better as a function */
export interface Luxes {
  maxlight?: number;
  xxxlight?: number;
  xxlight?: number;
  xlight?: number;
  light?: number;
  medium?: number;
  dark?: number;
  xdark?: number;
  xxdark?: number;
  xxxdark?: number;
  maxdark?: number;
}

export interface ColorInput {
  hue: number;
  sat: number;
  lux: Lighter;
}

export interface ColorInputs {
  primary?: ColorInput;
  secondary?: ColorInput;
  tertiary?: ColorInput;
  grey?: ColorInput;
  success?: ColorInput;
  error?: ColorInput;
  font?: ColorInput;
  background?: ColorInput;
  shadow?: ColorInput;
  border?: ColorInput;
  disabled?: ColorInput;
  hint?: ColorInput;
}

export interface Color {
  maxlight?: string;
  xxxlight?: string;
  xxlight?: string;
  xlight?: string;
  light?: string;
  medium?: string;
  dark?: string;
  xdark?: string;
  xxdark?: string;
  xxxdark?: string;
  maxdark?: string;
}

export interface Colors {
  primary?: Color;
  secondary?: Color;
  tertiary?: Color;
  grey?: Color;
  success?: Color;
  error?: Color;
  font?: Color;
  background?: Color;
  shadow?: Color;
  border?: Color;
  disabled?: Color;
  hint?: Color;
}

type Lighter = (x: number) => number;

export const lighterGen = (scale: number): Lighter => (x) => scale * x;
export const lighterDefault = lighterGen(10);

export const luxesGen = (lighterFn: Lighter): Luxes => ({
  maxlight: lighterFn(10),
  xxxlight: lighterFn(9),
  xxlight: lighterFn(8),
  xlight: lighterFn(7),
  light: lighterFn(6),
  medium: lighterFn(5),
  dark: lighterFn(4),
  xdark: lighterFn(3),
  xxdark: lighterFn(2),
  xxxdark: lighterFn(1),
  maxdark: lighterFn(0),
});

export const defaultLuxes = luxesGen(lighterDefault);

export const colorGen = ({ hue, sat, lux }) => `hsl(${hue}, ${sat}%, ${lux}%)`;

export const defaultColorsInput = {
  primary: {
    hue: 221,
    sat: 58,
    lux: lighterDefault,
  },
  secondary: {
    hue: 5,
    sat: 58,
    lux: lighterDefault,
  },
  tertiary: {
    hue: 34,
    sat: 58,
    lux: lighterGen(6),
  },
  grey: {
    hue: 0,
    sat: 0,
    lux: lighterDefault,
  },
  success: {
    hue: 129,
    sat: 52,
    lux: lighterDefault,
  },
  error: {
    hue: 16,
    sat: 98,
    lux: lighterGen(12),
  },
  font: {
    hue: 0,
    sat: 0,
    lux: lighterGen(5.6),
    // semantic usage:
    //   light: 46,
    //   medium: 28,
    //   dark: 15,
  },
  background: {
    hue: 0,
    sat: 0,
    lux: lighterDefault,
  },
  border: {
    hue: 0,
    sat: 0,
    lux: lighterGen(17),
    // semantic usage:
    //   medium: 87,
    //   dark: 68,
  },
  shadow: {
    hue: 0,
    sat: 0,
    lux: lighterDefault,
  },
  disabled: {
    hue: 0,
    sat: 0,
    lux: lighterDefault,
  },
  hint: {
    hue: 0,
    sat: 0,
    lux: lighterDefault,
  },
  links: {
    hue: 198,
    sat: 43,
    lux: lighterGen(8.4),
  },
};

export const defaultColors = {
  primary: {
    hue: 221,
    sat: 58,
    lux: defaultLuxes,
  },
  secondary: {
    hue: 5,
    sat: 58,
    lux: defaultLuxes,
  },
  tertiary: {
    hue: 34,
    sat: 58,
    lux: {
      medium: 30
    },
  },
  grey: {
    hue: 0,
    sat: 0,
    lux: defaultLuxes,
  },
  success: {
    hue: 129,
    sat: 52,
    lux: defaultLuxes,
  },
  error: {
    hue: 16,
    sat: 98,
    lux: {
      medium: 59
    },
  },
  font: {
    hue: 0,
    sat: 0,
    lux: {
      light: 46,
      medium: 28,
      dark: 15,
    },
  },
  background: {
    hue: 0,
    sat: 0,
    lux: defaultLuxes,
  },
  border: {
    hue: 0,
    sat: 0,
    lux: {
      medium: 87,
      dark: 68,
    },
  },
  shadow: {
    hue: 0,
    sat: 0,
    lux: defaultLuxes,
  },
  disabled: {
    hue: 0,
    sat: 0,
    lux: defaultLuxes,
  },
  hint: {
    hue: 0,
    sat: 0,
    lux: defaultLuxes,
  },
  links: {
    hue: 198,
    sat: 43,
    lux: {
      medium: 42,
    },
  },
};

