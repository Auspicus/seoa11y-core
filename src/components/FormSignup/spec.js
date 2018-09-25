import ReactDOM from 'react-dom';
import React from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import FormSignup from './index.jsx';

describe('# FormSignup', () => {
  test('should call onSignup with user information', () => {
    const onSignup = sinon.spy();
    const onFail = () => {};
    const formInput = {
      email: 'johndoe@example.com',
      name: {
        first: 'John',
        last: 'Doe'
      },
      password: 'password.1',
      confirmPassword: 'password.1'
    };
    const wrapper = shallow(<FormSignup onFail={onFail} onSignup={onSignup} />);
    // type: formInput.email into email field
    wrapper.find('input[type="email"]').simulate('change', { target: { value: formInput.email } });
    // type: formInput.name.first into first name field
    wrapper.find('input[name="signup-first-name"]').simulate('change', { target: { value: formInput.name.first } });
    // type: formInput.name.last into last name field
    wrapper.find('input[name="signup-last-name"]').simulate('change', { target: { value: formInput.name.last } });
    // type: formInput.password into the password field
    wrapper.find('input[name="signup-password"]').simulate('change', { target: {value: formInput.password} });
    // type: formInput.password into the password field
    wrapper.find('input[name="signup-confirm-password"]').simulate('change', { target: {value: formInput.confirmPassword} });
    // click: the login button
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    const formOutput = onSignup.getCall(0).args[0];

    expect(formOutput.email).toEqual(formInput.email);
    expect(formOutput.name.first).toEqual(formInput.name.first);
    expect(formOutput.name.last).toEqual(formInput.name.last);
    expect(formOutput.password).toEqual(formInput.password);
    expect(formOutput.confirmPassword).toEqual(formInput.confirmPassword);
  });
});
