import React from 'react';
import { shallow } from 'enzyme';

import { MockComponent } from '../../__mocks__/ui';

// System under test
import RouteContainer from '../RouteContainer';

const homeSearch = { name: 'Home' };
const detailSearch = { name: 'Detail' };

jest.mock('../../screens', () => ({
  Home: MockComponent,
  Detail: MockComponent,
}));

it('correctly renders all routes', () => {
  const container = shallow(<RouteContainer />);
  expect(container.find(homeSearch).exists()).toBe(true);
  expect(container.find(detailSearch).exists()).toBe(true);
});

it('correctly renders with Home as initial route', () => {
  const container = shallow(<RouteContainer />);
  expect(container.props().initialRouteName).toBe('Home');
});
