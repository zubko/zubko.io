import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ButtonLink } from "../../components/ButtonLink";
import { Link } from "../../components/Link";
import { Seo } from "../../components/Seo";
import { Layout } from "../layout/Layout";
import { LinkData, Links } from "./LinksData";

export const ContactsPage = () => (
  <Layout>
    <Seo title="Contacts" keywords={[`contacts`]} />
    <h2>Contacts</h2>
    <p>You can find me here:</p>
    <ButtonGroup>
      {Links.map(l => (
        <Button key={l.to} data={l} />
      ))}
    </ButtonGroup>
    <Link to="/">← Home</Link>
  </Layout>
);

const Button = ({
  data: { color, borderColor, to, title, icon }
}: {
  data: LinkData;
}) => {
  const TitleComp = typeof title === "function" ? title : null;
  return (
    <ButtonLinkWrap backgroundColor={color} borderColor={borderColor} to={to}>
      {icon ? <ButtonIcon icon={icon} width={18} height={18} /> : null}
      {TitleComp ? <TitleComp /> : title}
    </ButtonLinkWrap>
  );
};

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const ButtonLinkWrap = styled(ButtonLink)`
  margin: 0 0.8em 1.5em;
`;

const ButtonIcon = styled(FontAwesomeIcon)`
  width: 1em;
  height: 1em;
  margin-right: 0.4em;
`;
