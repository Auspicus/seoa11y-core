import ReactDOM from 'react-dom';
import React from 'react';
import {mount} from 'enzyme';
import sinon from 'sinon';

import UrlList from './index.jsx';

describe('# UrlList', () => {
  test('should call onClick with url id', () => {
    const urls = [{
      _id: '1234hex1234',
      url: 'http://example.com',
      reportId: '4321hex4321',
      codes: ['code1', 'code2', 'code3'],
      nNotices: 0,
      nWarnings: 0,
      nErrors: 0
    }];
    const filters = {
      page: 0,
      code: '',
      url: ''
    }
    const onClick = sinon.spy();
    const wrapper = mount(<UrlList onClick={onClick} urls={urls} filters={filters} />);
    wrapper.find('.url-list a').first().simulate('click');
    const output = onClick.getCall(0).args[0];
    expect(output).toEqual(urls[0]._id);
  });

  // TODO: add filter tests
});
