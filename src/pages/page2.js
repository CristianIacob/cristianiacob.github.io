import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import page2Styles from './styles/page2.module.css';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Header />
    <section className={page2Styles.applicationSection}>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem nobis vel autem. Nisi placeat deleniti delectus alias reiciendis nulla
        quos culpa veniam. Quidem cupiditate optio numquam laudantium quas facere velit.
      </p>
      <Link to="/mainPage">Go to the other page</Link>
    </section>
    <Footer />
  </Layout>
);

export default SecondPage;
