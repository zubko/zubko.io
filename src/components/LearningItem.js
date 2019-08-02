/**
 * Item component for Learning page
 *
 * @flow
 */

import React, { useState } from 'react';

import styled from '@emotion/styled';

import Link from './Link';
import { rhythm } from '../Typography';
import { Styles } from '../Theme';

type Props = {
  node: {
    html: string,
    frontmatter: { author: string, title: String, year: string },
  },
};

const LearningItem = ({ node }: Props) => {
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
