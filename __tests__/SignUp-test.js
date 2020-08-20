import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SignUp from '../components/SignUp';

Enzyme.configure({ adapter: new Adapter() });

describe('<SignUp/>', () => {
  it('스냅샷 테스트', () => {
    const wrapper = mount(<SignUp />);
    console.log(wrapper);
  });
});
