import React from 'react';

import Layout from '../components/Layout';
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
              <ParallaxLayer
                offset={0}
                speed={0}
                factor={3}
                style={{
                  backgroundImage: 'url(../images/rocket-transparent.png)',
                  backgroundSize: 'cover',
                  backgroundAttachment: 'fixed',
                }}
              />

              <ParallaxLayer offset={0} speed={0.5}>
                <Header />
                <button onClick={() => this.parallax.scrollTo(1)}>Next</button>
              </ParallaxLayer>
              <ParallaxLayer offset={1} speed={0.5} style={{ backgroundColor: '#805E73' }}>
                <div>offset 1</div>
                <button onClick={() => this.parallax.scrollTo(2)}>Next</button>
              </ParallaxLayer>
              <ParallaxLayer offset={2} speed={0.5} style={{ backgroundColor: '#87BCDE' }}>
                <div>offset 2</div>
                <section className={mainPageStyles.lastLayer}>
                  <button onClick={() => this.parallax.scrollTo(0)}>Back Top</button>
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
