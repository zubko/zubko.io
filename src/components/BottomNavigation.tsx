import styled from "styled-components";

import { rhythm } from "../Typography";
import { Link } from "./Link";

type Item = {
  path: string;
  title: string;
};

type Props = {
  next?: Item | null;
  prev?: Item | null;
  back?: Item | null;
};

/**
 * Component which displays Next/Prev navigation at the bottom of the page
 */
export const BottomNavigation = ({ next, prev, back }: Props) => (
  <>
    <hr />
    <OptionContainer>
      {prev && (
        <span>
          <OptionTitle>Prev:</OptionTitle> <br />
          <Link to={prev.path}>← {prev.title}</Link>
        </span>
      )}
    </OptionContainer>
    <OptionContainer>
      {next && (
        <span>
          <OptionTitle>Next:</OptionTitle> <br />
          <Link to={next.path}>{next.title} →</Link>
        </span>
      )}
    </OptionContainer>
    <OptionContainer>
      {back && (
        <span>
          <OptionTitle>Back:</OptionTitle> <br />
          <Link to={back.path}>← {back.title}</Link>
        </span>
      )}
    </OptionContainer>
  </>
);

const OptionContainer = styled.div`
  margin-bottom: ${rhythm(1)};
`;

const OptionTitle = styled.span`
  font-weight: 600;
`;
