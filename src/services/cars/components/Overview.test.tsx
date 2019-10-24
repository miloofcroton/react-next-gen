/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import Overview from './Overview';
import { mockCars } from '../data/mocks';

describe('Cars overview', () => {
  test('renders the h1 title', () => {
    const overview = shallow(<Overview cars={[]} />);
    expect(overview.find('h1').text()).toEqual('Cars Overview');
  });

  test('renders empty cars list when no cars are provided', () => {
    const overview = shallow(<Overview cars={[]} />);
    expect(
      overview
        .find('.Cars__List')
        .children()
        .find('p')
        .text()
    ).toEqual('No cars');
  });

  test('renders cars list with 3 items when 3 cars are provided', () => {
    const overview = shallow(<Overview cars={mockCars} />);
    expect(
      overview
        .find('.Cars__List')
        .children()
        .find('ul')
        .children()
    ).toHaveLength(3);
  });

  test('renders cars list with the expected item on third place', () => {
    const overview = shallow(<Overview cars={mockCars} />);
    expect(
      overview
        .find('.Cars__List')
        .children()
        .find('ul')
        .childAt(2)
        .text()
    ).toEqual('Volvo XC90');
  });

  test('renders car detail after clicking on an item in cars list', () => {
    const overview = shallow(<Overview cars={mockCars} />);
    overview
      .find('.Cars__List')
      .children()
      .find('ul')
      .childAt(1)
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .simulate('click', { preventDefault() {} });

    expect(
      overview
        .update()
        .find('.CarInfo')
        .find('h2')
        .text()
    ).toEqual('Volvo XC60');
  });
});
