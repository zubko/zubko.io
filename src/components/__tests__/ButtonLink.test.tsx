import React from 'react';
import renderer from 'react-test-renderer';

import ButtonLink from '../ButtonLink';

describe('ButtonLink', () => {
  it('renders without regressions', () => {
    const tree = renderer
      .create(
        <ButtonLink
          backgroundColor="red"
          borderColor="blue"
          to="https://button.link.to">
          Title
        </ButtonLink>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
