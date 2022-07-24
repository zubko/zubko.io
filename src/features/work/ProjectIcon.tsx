import styled from "@emotion/styled";
import {
  faAndroid,
  faApple,
  faReact
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { rhythm } from "../../Typography";

const TagToIcon = {
  "React Native": faReact,
  Android: faAndroid,
  iOS: faApple,
  React: faReact
};

const AvailableIcons = Object.keys(TagToIcon);

export const ProjectIcon = ({ tag }: { tag: string }) => {
  if (!AvailableIcons.includes(tag)) {
    return null;
  }
  return (
    <PlatformIcon
      // @ts-expect-error: Check after updating fontawesome to the latest version
      icon={TagToIcon[tag]}
      width={18}
      height={18}
    />
  );
};

const PlatformIcon = styled(FontAwesomeIcon)`
  width: 1em;
  height: 1em;
  margin-left: ${rhythm(0.1)};
`;
