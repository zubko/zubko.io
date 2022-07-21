import React from 'react';
import renderer from 'react-test-renderer';

import UpworkSvg from '../UpworkSvg';

describe('UpworkSvg', () => {
  it('renders without regressions', () => {
    const tree = renderer.create(<UpworkSvg />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
