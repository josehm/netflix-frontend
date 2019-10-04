import React from 'react';
import { shallow } from 'enzyme';

import Button from './index';

// shollow - enzyme
// expect - jest
describe('<Button>', () => {

  it('should have 1 button', () => {
    const component = shallow(<Button />);
    expect(component.find('button').length).toBe(1);
  });

  it('should have a divClassname', () => {
    const component = shallow(<Button />);
    expect(component.hasClass('divClassname')).toEqual(true);
  });

  it('should render a name', () => {
    const component = shallow(<Button name="gatito" />);
    expect(component.find('p').length).toBe(1);
  });

  it('should a prop name', () => {
    const component = shallow(<Button name="gatito" />);
    expect(component.props().name).toEqual("gatito");
  });
});