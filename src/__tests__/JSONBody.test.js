import React from 'react';
import JSONBody from '../component/JSONBody/JSONBody.js';
import renderer from 'react-test-renderer';

describe('<JSONBody />', () => {
  test('basic rendering', () => {
    const mountedJSONBody = shallow(<JSONBody />);
    expect(mountedJSONBody.find('JSONBody')).toBeTruthy();
  });

  test('rendering follows the snapshot', () => {
    const snapshot = renderer.create(<JSONBody />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});