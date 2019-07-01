import React from 'react';
import Form from '../component/Form/Form.js';
import App from '../component/App/App.js';
import renderer from 'react-test-renderer';

describe('<Form />', () => {
  test('basic rendering', () => {
    const mountedForm = shallow(<Form />);
    expect(mountedForm.find('form')).toBeTruthy();
  });

  test('form input change', () => {
    const mountedApp = mount(<App />);
    const URL = mountedApp.find('input.URL');
    URL.simulate('change', {target: {value: 'Melissa'}});
    expect(mountedApp.state('URL')).toEqual('Melissa');

  });
  
  test('click on get', () => {
    const mountedApp = mount(<App />);
    const button = mountedApp.find('input.GET');
    button.simulate('change');
    expect(mountedApp.state('method')).toEqual('GET');
  });

  test('click on post', () => {
    const mountedApp = mount(<App />);
    const button = mountedApp.find('input.POST');
    button.simulate('change');
    expect(mountedApp.state('method')).toEqual('POST');
  });

  test('click on put', () => {
    const mountedApp = mount(<App />);
    const button = mountedApp.find('input.PUT');
    button.simulate('change');
    expect(mountedApp.state('method')).toEqual('PUT');
  });

  test('click on patch', () => {
    const mountedApp = mount(<App />);
    const button = mountedApp.find('input.PATCH');
    button.simulate('change');
    expect(mountedApp.state('method')).toEqual('PATCH');
  });

  test('click on delete', () => {
    const mountedApp = mount(<App />);
    const button = mountedApp.find('input.DELETE');
    button.simulate('change');
    expect(mountedApp.state('method')).toEqual('DELETE');
  });

  test('rendering follows the snapshot', () => {
    const snapshot = renderer.create(<Form />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});