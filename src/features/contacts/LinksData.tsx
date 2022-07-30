import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faCodepen,
  faGithubAlt,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faAt, faCube } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import { UpworkSvg } from "./UpworkSvg";

export type LinkData = {
  to: string;
  title: string | (() => JSX.Element);
  icon?: IconDefinition;
  color: string;
  borderColor: string;
};

export const Links: LinkData[] = [
  {
    to: "https://github.com/zubko",
    title: "GitHub",
    icon: faGithubAlt,
    color: "#333",
    borderColor: "#000",
  },
  {
    to: "https://twitter.com/_zubko",
    title: "Twitter",
    icon: faTwitter,
    color: "#2CA9E1",
    borderColor: "#2695BC",
  },
  {
    to: "https://ua.linkedin.com/in/alexanderzubko",
    title: "LinkedIn",
    icon: faLinkedin,
    color: "#0060A9",
    borderColor: "#063974",
  },
  {
    to: "https://codepen.io/zubko",
    title: "Codepen",
    icon: faCodepen,
    color: "#333",
    borderColor: "#000",
  },
  {
    to: "https://codesandbox.io/u/zubko",
    title: "CodeSandbox",
    icon: faCube,
    color: "#f49916",
    borderColor: "#dd870b",
  },
  {
    to: "mailto:alex@zubko.io",
    title: "Email",
    icon: faAt,
    color: "#2C8127",
    borderColor: "#1a4d17",
  },
  {
    to: "https://www.upwork.com/o/profiles/users/_~015053205b348e8586/",
    title: () => (
      <>
        <UpworkIcon />
        work
      </>
    ),
    color: "#64d737",
    borderColor: "#429a1f",
  },
];

const UpworkIcon = styled(UpworkSvg)`
  width: 1.25em;
`;
