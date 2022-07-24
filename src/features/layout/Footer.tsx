/**
 * Common footer of the website
 */

import styled from "@emotion/styled";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "../../components/Link";
import { rhythm } from "../../Typography";

export const Footer = () => (
  <footer css={{ marginTop: rhythm(1) }}>
    <p>
      ~~~
      <br /> © {new Date().getFullYear()}, Built{" "}
      <AcknowledgementsLink usePlainStyle to="/acknowledgements">
        with 💜 and open source{" "}
        <Icon icon={faReact} size="lg" width={25} height={25} />
      </AcknowledgementsLink>
    </p>
  </footer>
);

const AcknowledgementsLink = styled(Link)`
  text-decoration: none;
  background: none;
`;

const Icon = styled(FontAwesomeIcon)`
  color: violet;
`;
