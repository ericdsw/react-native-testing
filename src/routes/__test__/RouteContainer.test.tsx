import React from 'react';
import { shallow } from 'enzyme';

import { MockComponent } from '../../__mocks__/ui';

// System under test
import RouteContainer from '../RouteContainer';

/**
 * This is an example on how we would use enzyme in react native
 */

const homeSearch = { name: 'Home' };
const detailSearch = { name: 'Detail' };
const formSearch = { name: 'FormScreen' };
const compositeComponentSearch = { name: 'CompositeComponentScreen' };

jest.mock('../../screens', () => ({
  Home: MockComponent,
  Detail: MockComponent,
  FormScreen: MockComponent,
  CompositeComponentScreen: MockComponent
}));

it('correctly renders all routes', () => {
  const container = shallow(<RouteContainer />);
  expect(container.find(homeSearch).exists()).toBe(true);
  expect(container.find(detailSearch).exists()).toBe(true);
  expect(container.find(formSearch).exists()).toBe(true);
  expect(container.find(compositeComponentSearch).exists()).toBe(true);
});

it('correctly renders with Home as initial route', () => {
  const container = shallow(<RouteContainer />);
  expect(container.props().initialRouteName).toBe('Home');
});

