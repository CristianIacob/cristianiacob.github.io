import PropTypes from 'prop-types';
import React from 'react';
import footerStyles from './Footer.module.css';

const Footer = () => (
  <footer className={footerStyles.container}>
    <div className={footerStyles.content}>
      <span className={footerStyles.title}>
        © {new Date().getFullYear()}, Built with{' '}
        <a className={footerStyles.defaultLink} href="https://www.gatsbyjs.org">
          Gatsby
        </a>
      </span>
    </div>
  </footer>
);

export default Footer;
