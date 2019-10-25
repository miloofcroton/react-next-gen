import { Block } from 'lib/blocks/definition';
import { Theme } from 'lib/theme/definition';

interface ButtonBlock extends Block {
  '& svg'?: any;
}

export const baseButton = ({ inverted }) => (theme: Theme): ButtonBlock =>  {


  return {
    label: 'button',
    // background: paper.hue(theme, hue, lux),
    // color: font.contrast(theme, lux),
    // textDecoration: 'none',

      // palette.mode, palette.color, palette.image
      background: !inverted
        ? theme.palette.colors.primary.medium
        : 'white',
      color: !inverted
        ? 'white'
        : theme.palette.colors.primary.medium,

    // palette.fonts
    fontSize: 15,
    fontWeight: 700,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    lineHeight: '1.46667',
    letterSpacing: '0.1px',
    textDecoration: 'none',

    // canvas.sizing
    minWidth: '64px',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: theme.palette.colors.primary.medium,
    borderRadius: '4px',
    margin: '0px',
    padding: '8px 10px',

    // canvas.spacing
    display: 'inline-block',
    verticalAlign: 'middle',
    textAlign: 'center',

    // canvas.positioning
    position: 'relative',

    // motion.transition
    transition: 'background 300ms ease 0s, border 300ms ease 0s, color 300ms ease 0s',

    // interaction
    cursor: 'pointer',
    userSelect: 'auto',

    '& svg': baseButtonImage({ inverted })(theme),
  };
};

export const baseButtonImage = ({ inverted }) => (theme): Block => ({
  label: 'buttonImage',

  fill: !inverted
    ? 'white'
    : theme.palette.colors.primary.medium,
  color: !inverted
    ? 'white !important'
    : theme.palette.colors.primary.medium + 'important',
  display: 'inline-block',
  verticalAlign: 'middle',
  margin: '-2.46154px 8px auto auto',
  height: '1em !important',
  width: '1em !important',
  transform: 'scale(1)',
  transition: 'transform 300ms ease-out 0s',
});

export const defaultButton = baseButton({ inverted: false });
export const invertedButton = baseButton({ inverted: true });

export const defaultButtonImage = baseButtonImage({ inverted: false });



/*
object => function that returns a function with the object as the body for the block styles

change object?
run above function with changed object

*/
