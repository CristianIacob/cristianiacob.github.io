import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import headerStyles from './header.module.css';
import { useStaticQuery, graphql } from 'gatsby';

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className={headerStyles.container}>
      <div className={headerStyles.content}>
        <h1 style={{ margin: 0, display: 'flex' }}>
          <Link className={headerStyles.title} to="/page2/">
            Home
          </Link>
          <Link to="/mainPage" className={headerStyles.title}>
            {data.site.siteMetadata.title}
          </Link>
        </h1>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
