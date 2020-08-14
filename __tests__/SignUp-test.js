import React from 'react';
import renderer from 'react-test-renderer';

import SignUp from '../components/SignUp';

describe('<SignUp/>', () => {
  it('스냅샷 테스트', () => {
    const result = renderer.create(<SignUp />).toJSON();
    expect(result).toMatchSnapshot();
  });
});
