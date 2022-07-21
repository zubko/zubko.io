import React from 'react';
import renderer from 'react-test-renderer';

import BottomNavigation from '../BottomNavigation';

describe('BottomNavigation', () => {
  it('renders without regressions', () => {
    const tree = renderer
      .create(
        <BottomNavigation
          prev={{ title: 'prev-title', path: '/prev-path' }}
          next={{ title: 'next-title', path: '/next-path' }}
          back={{ title: 'back-title', path: '/back-path' }}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
