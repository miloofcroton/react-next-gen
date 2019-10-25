import { Block } from 'lib/blocks/definition';
import { Theme } from 'lib/theme/definition';

export const card = ({
  hue,
  lux,
  size,
  space,
}) => (theme): Block => ({
  // background: paper.hue(theme, hue, lux),
  // color: font.contrast(theme, lux),
  // width: theme.sizing.large(2),
  // height: theme.sizing.large(2),
});
