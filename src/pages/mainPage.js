import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import AstronautImage from '../components/OptimizedImages/astronaut';
import RocketImage from '../components/OptimizedImages/rocket';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/seo';
import mainPageStyles from './styles/mainPage.module.css';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';

class MainPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <div className={mainPageStyles.container}>
          <div>
            <Parallax pages={3} scrolling={true} ref={ref => (this.parallax = ref)}>
              <ParallaxLayer offset={0} speed={0.5}>
                <Header />
                <button onClick={() => this.parallax.scrollTo(1)}>Next</button>
                <section className={mainPageStyles.image}>
                  <AstronautImage />
                </section>
              </ParallaxLayer>
              <ParallaxLayer offset={1} speed={0.5}>
                <button onClick={() => this.parallax.scrollTo(2)}>Next</button>
                <section className={mainPageStyles.image}>
                  <AstronautImage />
                </section>
              </ParallaxLayer>
              <ParallaxLayer offset={2} speed={0.5}>
                <section className={mainPageStyles.lastLayer}>
                  <button onClick={() => this.parallax.scrollTo(0)}>Back Top</button>
                  <section className={mainPageStyles.image}>
                    <AstronautImage />
                  </section>
                  <Footer />
                </section>
              </ParallaxLayer>
            </Parallax>
          </div>
        </div>
      </Layout>
    );
  }
}

export default MainPage;
