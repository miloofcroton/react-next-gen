/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';

import Checkbox from './Checkbox';

describe('Checkbox', () => {
  test('renders the checkbox with correct label', () => {
    const wrapper = shallow(
      <Checkbox
        rootID="NiceCarCheckbox"
        id="CarAvailability"
        name="is_available"
        value="yes"
        label="Is this car available?"
      />
    );
    expect(
      wrapper
        .find('#NiceCarCheckbox')
        .find('label')
        .text()
    ).toEqual('Is this car available?');
  });
});
