// import { CSSObject } from '@emotion/serialize';
// I may just want to use CSSObject from @emotion instead

/** Params from theme to block:
  color
  background (color or image)
  font
  size variety
  outlined?
  animated?
  hover
  active
  overflow
  resize
  cursor
 */
export interface Block {
  label?: string;

  // palette
  background?: string;
  opacity?: string;
  boxShadow?: string;
  fill?: string;
  color?: string;
  fontFamily?: string;
  fontWeight?: string | number;
  fontStyle?: string;
  fontVariant?: string;
  fontSize?: string | number;
  letterSpacing?: string;
  lineHeight?: string | number;
  textDecoration?: string;

  // canvas
  // .sizing
  width?: string;
  maxWidth?: string;
  minWidth?: string;
  height?: string;
  maxHeight?: string;
  minHeight?: string;
  margin?: string;
  padding?: string;
  border?: string;
  borderWidth?: string;
  borderStyle?: string;
  borderColor?: string;
  borderRadius?: string;
  outline?: string;
  // .spacing
  display?: string;
  visibility?: string;
  grid?: string;
  flex?: string;
  verticalAlign?: string;
  textAlign?: string;
  position?: string;
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
  zIndex?: string;

  // motion
  transition?: string;
  transform?: string;
  animation?: string;

  // interaction
  cursor?: string;
  userSelect?: string;
  resize?: string;
  overflow?: string;
  '&:hover'?: {
    cursor?: string;
    opacity?: string;
  };
  '&:active'?: {
    cursor?: string;
    opacity?: string;
  };
  '&:disabled'?: {
    cursor?: string;
    opacity?: string;
  };

}
