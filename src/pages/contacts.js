import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faCodepen,
  faLinkedin,
  faGithubAlt,
} from '@fortawesome/free-brands-svg-icons';
import { faAt, faCube } from '@fortawesome/free-solid-svg-icons';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Link from '../components/Link';
import ButtonLink from '../components/ButtonLink';
import UpworkSvg from '../components/UpworkSvg';

const ContactsPage = () => (
  <Layout>
    <SEO title="Contacts" keywords={[`contacts`]} />
    <h2>Contacts</h2>
    <p>You can find me here:</p>
    <div css={styles.group}>
      {links.map(l => (
        <Button data={l} />
      ))}
    </div>
    <Link to="/">← Home</Link>
  </Layout>
);
export default ContactsPage;

const Button = ({ data: { color, borderColor, to, title, icon } }) => {
  const Title = typeof title === 'function' ? title : null;
  return (
    <ButtonLink
      css={styles.button}
      backgroundColor={color}
      borderColor={borderColor}
      to={to}>
      {icon ? (
        <FontAwesomeIcon
          icon={icon}
          css={styles.buttonIcon}
          width={18}
          height={18}
        />
      ) : null}
      {Title ? <Title /> : title}
    </ButtonLink>
  );
};

const links = [
  {
    to: 'https://github.com/zubko',
    title: 'GitHub',
    icon: faGithubAlt,
    color: '#333',
    borderColor: '#000',
  },
  {
    to: 'https://twitter.com/_zubko',
    title: 'Twitter',
    icon: faTwitter,
    color: '#2CA9E1',
    borderColor: '#2695BC',
  },
  {
    to: 'https://ua.linkedin.com/in/alexanderzubko',
    title: 'LinkedIn',
    icon: faLinkedin,
    color: '#0060A9',
    borderColor: '#063974',
  },
  {
    to: 'https://codepen.io/zubko',
    title: 'Codepen',
    icon: faCodepen,
    color: '#333',
    borderColor: '#000',
  },
  {
    to: 'https://codesandbox.io/u/zubko',
    title: 'CodeSandbox',
    icon: faCube,
    color: '#f49916',
    borderColor: '#dd870b',
  },
  {
    to: 'mailto:alex@zubko.io',
    title: 'Email',
    icon: faAt,
    color: '#2C8127',
    borderColor: '#1a4d17',
  },
  {
    to: 'https://www.upwork.com/o/profiles/users/_~015053205b348e8586/',
    title: () => (
      <>
        <UpworkSvg css={styles.upworkIcon} />
        work
      </>
    ),
    color: '#64d737',
    borderColor: '#429a1f',
  },
];

const styles = {
  group: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    margin: '0 0.8em 1.5em',
  },
  buttonIcon: {
    width: '1em',
    height: '1em',
    marginRight: '0.4em',
  },
  upworkIcon: {
    width: '1.25em',
  },
};
