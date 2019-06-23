/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Footer from '../Footer';
import Header from '../Header';
import layoutStyles from './layout.module.css';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.wrapper}>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div className={layoutStyles.container}>
        <main>{children}</main>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
