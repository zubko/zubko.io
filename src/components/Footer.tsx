/**
 * Common footer of the website
 */

import { faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from '../components';
import { rhythm } from '../Typography';

export default () => (
  <footer css={{ marginTop: rhythm(1) }}>
    <p>
      ~~~
      <br /> © {new Date().getFullYear()}, Built{' '}
      <Link css={Styles.link} usePlainStyle to="/acknowledgements">
        with 💜 and open source{' '}
        <FontAwesomeIcon
          icon={faReact}
          css={Styles.faIcon}
          size="lg"
          width={25}
          height={25}
        />
      </Link>
    </p>
  </footer>
);

const Styles = {
  link: {
    textDecoration: 'none',
    background: 'none',
  },
  faIcon: { color: 'violet' },
};
