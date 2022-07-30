/**
 * Item component for Learning page
 */

import { MouseEvent, useState } from "react";

import styled from "styled-components";

import { Link } from "../../components/Link";
import { Markdown } from "../../components/Markdown";
import { rhythm } from "../../Typography";

type Props = {
  node: {
    html: string;
    frontmatter: { author: string; title: string; year: string };
  };
};

export const LearningItem = ({ node }: Props) => {
  const {
    html,
    frontmatter: { author, title, year },
  } = node;
  const [opened, setOpened] = useState(false);
  const handleClick = (
    event: MouseEvent<HTMLDivElement | HTMLAnchorElement>
  ) => {
    event.preventDefault();
    setOpened(!opened);
  };
  return (
    <Container>
      <Triangle opened={opened} onClick={handleClick} />
      <TitleAndContent>
        <StyledLink to="#" usePlainStyle onClick={handleClick}>
          {author} - {title}
          {year ? ` '${year}` : ""}
        </StyledLink>
        {opened && (
          <Content>
            <Markdown htmlContent={html} inline />
          </Content>
        )}
      </TitleAndContent>
    </Container>
  );
};

const Container = styled.li`
  display: flex;
  flex-direction: row;
`;

const Triangle = styled.div.attrs({
  children: "▶",
})<{ opened: boolean }>`
  display: inline-block;
  margin-right: ${rhythm(0.5)};
  transform: rotate(${(props) => (props.opened ? 90 : 0)}deg);
  transform-origin: 50% 45%;
  align-self: flex-start;
  transition: transform 0.2s;
  cursor: pointer;
  user-select: none;
`;

const TitleAndContent = styled.div`
  flex: 1;
`;

const StyledLink = styled(Link)`
  background-image: none;
`;

const Content = styled.div`
  && {
    /* '&&' to override some list related styles in Typography.js
       which made every last sub element of 'li' to not have margin-bottom */
    margin: ${rhythm(0.5)} 0;
  }
`;
