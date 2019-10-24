/** @jsx jsx */
import { jsx } from '@emotion/core';
// import React from 'react';
import { action } from '@storybook/addon-actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';

import ButtonNote from './Button.md';
import ButtonInverted from './ButtonInverted.md';
import { primaryButton, secondaryButton } from './Button';

export default {
  title: 'CSS|Input/Button',
  parameters: { notes: ButtonNote },
};

/** This is just a basic example */
export const Basic = () => (
  <button
    css={primaryButton}
    onClick={action('clicked')}
  >
    Hello Button
  </button>
);

export const Inverted = () => (
  <button
    css={secondaryButton}
  >
    Hello Button
  </button>
);
Inverted.story = {
  parameters: { notes: ButtonInverted },
};

export const WithSVG = () => (
  <button
    css={secondaryButton}
  >
    Dolla Dolla Bills
    <FontAwesomeIcon
      icon={faMoneyBill}
    />
  </button>
);

