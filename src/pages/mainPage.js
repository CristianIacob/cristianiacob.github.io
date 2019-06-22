import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Image from '../components/image';
import SEO from '../components/seo';
import mainPageStyles from './styles/mainPage.module.css';

const MainPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={mainPageStyles.container}>
      <section>
        <h1>Hello Guys</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page2/">Go to page 2</Link>
      </section>
      <section className={`${mainPageStyles.image}`}>
        <Image />
      </section>
    </div>
  </Layout>
);

export default MainPage;
