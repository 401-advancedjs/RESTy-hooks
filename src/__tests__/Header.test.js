import React from 'react';
import Header from '../component/Header/Header.js';

import renderer from 'react-test-renderer';

describe('<Header />', () => {
  test('basic rendering', () => {
    const mountedHeader = shallow(<Header />);
    expect(mountedHeader.find('Header')).toBeTruthy();
  });

  test('rendering follows the snapshot', () => {
    const snapshot = renderer.create(<Header />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
