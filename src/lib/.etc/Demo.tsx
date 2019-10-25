/** @jsx jsx */
import { jsx } from '@emotion/core';

import React from 'react';
import color from 'color';
import { CSSObject } from '@emotion/serialize';

type Lux = 'light' | 'dark' | 'default';

type Color = {
  [key in Lux]: string;
};

type Hue = 'primary' | 'secondary';

type Colors = {
  [key in Hue]: Color;
};

type Scaler = (n: number) => string;

type Shade = {
  shader: Scaler;
};

type Dimension = 'small' | 'medium' | 'large';

type Dimensions = {
  [key in Dimension]: Scaler;
};

interface Theme {
  palette: Colors & Shade;
  sizing: Dimensions;
  spacing: Dimensions;
}

const font = {
  lux: (theme: Theme, lux: Lux) =>
    lux === 'dark' ?  theme.palette.shader(10) :
    lux === 'light' ?  theme.palette.shader(90) :
    theme.palette.shader(50),
  contrast: (theme: Theme, lux: Lux) =>
    lux === 'dark' ?  font.lux(theme, 'light') :
    lux === 'light' ?  font.lux(theme, 'dark') :
    font.lux(theme, 'default')
};


const paper = {
  hue: (theme: Theme, hue: Hue, lux: Lux) =>
    theme.palette[hue][lux]
};

export const greyScale: Scaler = (percent) => color('black')
  .lighten(percent/100)
  .toString();

export const darkGreyScale: Scaler = (percent) => color('black')
  .lighten(percent/200)
  .toString();

export const redScale: Scaler = (percent) => color('red')
  .lighten(percent/100)
  .toString();

type Unit = 'px' | 'em';

const measure = (size: number) =>
  (x: number, unit: Unit) => (y: number) => `${size * x * y}${unit}`;

const smallRuler = measure(1);
const largeRuler = measure(20);

const sizer = (x: number, unit: Unit) => ({
  small: largeRuler(1 * 4 * x, unit),
  medium: largeRuler(2 * 4 * x, unit),
  large: largeRuler(3 * 4 * x, unit),
});

const spacer = (x: number, unit: Unit) => ({
  small: smallRuler(1 * 4 * x, unit),
  medium: smallRuler(2 * 4 * x, unit),
  large: smallRuler(3 * 4 * x, unit),
});

type Fn = (...args) => any;
type HiFn = (...args) => Fn;

interface BlockParams {
  hue: Hue;
  lux: Lux;
  size?: Dimension;
  space?: Dimension;
}

// doublecheck the typing on this
type Block = (P: BlockParams) => CSSObject;

type Blocks = (theme: Theme) => {
  [key: string]: Block;
}

const blocks: Blocks = (theme: Theme) => ({

  button: ({ hue, lux, size, space }: BlockParams) =>  ({
      backgroundColor: paper.hue(theme, hue, lux),
      color: font.contrast(theme, lux),
      textDecoration: 'none',
    }),

  field: ({ hue, lux, size, space }: BlockParams) =>  ({
      backgroundColor: paper.hue(theme, hue, lux),
      color: font.contrast(theme, lux),
      width: theme.sizing.large(1),
      height: theme.sizing.small(1),
    }),

  card: ({ hue, lux, size, space }: BlockParams) =>  ({
      backgroundColor: paper.hue(theme, hue, lux),
      color: font.contrast(theme, lux),
      width: theme.sizing.large(2),
      height: theme.sizing.large(2),
    }),
});

const theme: Theme = {
  palette: {
    primary: {
      light: 'indianred',
      dark: 'darkred',
      default: 'firebrick',
    },
    secondary: {
      light: 'paleturquoise',
      dark: 'navy',
      default: 'steelblue',
    },
    shader: greyScale
  },
  sizing: sizer(1, 'px'),
  spacing: spacer(1, 'px'),
};

const base = blocks(theme);

export const button = base['button'];
export const buttonPrimaryDark = button({ hue: 'primary', lux: 'dark' });
export const buttonPrimaryLight = button({ hue: 'primary', lux: 'light' });
export const buttonPrimaryDefault = button({ hue: 'primary', lux: 'default' });
export const buttonSecondaryDark = button({ hue: 'secondary', lux: 'dark' });
export const buttonSecondaryLight = button({ hue: 'secondary', lux: 'light' });
export const buttonSecondaryDefault = button({ hue: 'secondary', lux: 'default' });

interface HandlerConfig {
  prevent: boolean;
  action: Fn;
}

const clickHandler = ({ prevent, action }) => (e) => {
  if (prevent) {
    e.preventDefault();
  }

  action(e);
  // do stuff...
};

// eslint-disable-next-line no-console
const logEvent = (e) => console.log(e);

const demoConfig = {
  prevent: true,
  action: logEvent,
};

const demoHandler = clickHandler(demoConfig);

interface LinkButtonProps {
  text?: string;
  children: React.ReactNode;
  link: string;
  css: any;
}

export const Demo: React.FC<LinkButtonProps> = ({ text, link }) =>{
  return (
    <div>
      <button
        css={buttonPrimaryDark}
        onClick={demoHandler}
      >
        Basic Primary Dark Button
      </button>

      <a
        href={link}
        css={{
          ...buttonSecondaryLight,
          textDecoration: 'none'
        }}
      >
        Customized Secondary Light Button
      </a>
    </div>
  );
};
