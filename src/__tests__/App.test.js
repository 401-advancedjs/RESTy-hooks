import React from 'react';
import App from '../component/App/App.js';
import renderer from 'react-test-renderer';

describe('<App />', () => {
  test('basic rendering', () => {
    const mountedHeader = shallow(<App />);
    expect(mountedHeader.find('App')).toBeTruthy();
  });

  test('rendering follows the snapshot', () => {
    const snapshot = renderer.create(<App />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});