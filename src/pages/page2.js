import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>This is the second page</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem nobis vel autem. Nisi placeat deleniti delectus alias reiciendis nulla
      quos culpa veniam. Quidem cupiditate optio numquam laudantium quas facere velit.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
