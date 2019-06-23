import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import AstronautImage from '../components/OptimizedImages/astronaut';
import RocketImage from '../components/OptimizedImages/rocket';
import SEO from '../components/seo';
import mainPageStyles from './styles/mainPage.module.css';

const MainPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={mainPageStyles.container}>
      <RocketImage className={mainPageStyles.backgroundImage} />
      <section>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem nobis vel autem. Nisi placeat deleniti delectus alias reiciendis nulla
        quos culpa veniam. Quidem cupiditate optio numquam laudantium quas facere velit.
      </section>
      <section className={mainPageStyles.image}>
        <AstronautImage />
      </section>
    </div>
  </Layout>
);

export default MainPage;
