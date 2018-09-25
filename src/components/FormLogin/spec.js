import ReactDOM from 'react-dom';
import React from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import FormLogin from './index.jsx';

describe('# FormLogin', () => {
  test('should call onLogin with email and password', () => {
    const onLogin = sinon.spy();
    const formInput = {
      email: 'johndoe@johndoe.com',
      password: 'password'
    };
    const wrapper = shallow(<FormLogin onLogin={onLogin} />);
    // type: formInput.email into email field
    wrapper.find('input[type="email"]').simulate('change', { target: { value: formInput.email } });
    // type: formInput.password into the password field
    wrapper.find('input[type="password"]').simulate('change', { target: {value: formInput.password} });
    // click: the login button
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    const formOutput = onLogin.getCall(0).args[0];

    expect(formOutput.email).toEqual(formInput.email);
    expect(formOutput.password).toEqual(formInput.password);
  });
});
