/**
 * Common footer of the website
 */

import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import { Link } from "../../components/Link";
import { rhythm } from "../../Typography";

export const Footer = () => (
  <Container>
    <p>
      ~~~
      <br /> © {new Date().getFullYear()}, Built{" "}
      <AcknowledgementsLink usePlainStyle to="/acknowledgements">
        with 💜 and open source{" "}
        <Icon icon={faReact} size="lg" width={25} height={25} />
      </AcknowledgementsLink>
    </p>
  </Container>
);

const Container = styled.footer`
  margin-top: ${rhythm(1)};
`;

const AcknowledgementsLink = styled(Link)`
  text-decoration: none;
  background: none;
`;

const Icon = styled(FontAwesomeIcon)`
  color: violet;
`;
