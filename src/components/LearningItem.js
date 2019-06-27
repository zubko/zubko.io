import React, { useState } from 'react';

import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Link from './Link';
import { rhythm } from '../Typography';
import { Styles } from '../Theme';

const LearningItemContainer = styled.li`
  display: flex;
  flex-direction: row;
`;
const LearningItemMain = styled.div`
  flex: 1;
`;

const Triangle = styled.div`
  display: inline-block;
  margin-right: ${rhythm(0.5)};
  transform: rotate(${props => (props.opened ? 90 : 0)}deg);
  transform-origin: 50% 45%;
  align-self: flex-start;
  transition: transform 0.2s;
  cursor: pointer;
  user-select: none;
`;
Triangle.defaultProps = {
  children: '▶',
};

const LearningItem = ({ node }) => {
  const {
    html,
    frontmatter: { author, title, year },
  } = node;
  const [opened, setOpened] = useState(false);
  const handleClick = event => {
    event.preventDefault();
    setOpened(!opened);
  };
  return (
    <LearningItemContainer>
      <Triangle opened={opened} onClick={handleClick} />
      <LearningItemMain>
        <Link to="#" onClick={handleClick}>
          {author} - {title}
          {year ? ` '${year}` : ''}
        </Link>
        {opened && (
          <p>
            <div
              css={Styles.markdownInline}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </p>
        )}
      </LearningItemMain>
    </LearningItemContainer>
  );
};

export default LearningItem;
