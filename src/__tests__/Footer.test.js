import React from 'react';
import Footer from '../component/Footer/Footer.js';

import renderer from 'react-test-renderer';

describe('<Footer />', () => {
  test('basic rendering', () => {
    const mountedFooter = shallow(<Footer />);
    expect(mountedFooter.find('Footer')).toBeTruthy();
  });

  test('rendering follows the snapshot', () => {
    const snapshot = renderer.create(<Footer />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});