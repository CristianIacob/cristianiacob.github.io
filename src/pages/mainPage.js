import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/seo';
import mainPageStyles from './styles/mainPage.module.css';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons.cjs';
import FirstContainer from '../components/FirstContainer';

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
                  backgroundImage: `url(https://w.wallhaven.cc/full/ym/wallhaven-ymq2kx.jpg)`,
                  backgroundSize: 'cover',
                  backgroundAttachment: 'fixed',
                  filter: 'blur(4.5px)',
                }}
              />

              <ParallaxLayer offset={0} speed={-0.15}>
                <Header />
              </ParallaxLayer>

              <ParallaxLayer offset={0.13} speed={-0.35}>
                <FirstContainer />
              </ParallaxLayer>

              <ParallaxLayer offset={1} speed={0.5} style={{ backgroundColor: '#003459' }}>
                <span className={mainPageStyles.offsetElement}>Colored Text</span>
                <button onClick={() => this.parallax.scrollTo(2)}>Next</button>
              </ParallaxLayer>

              <ParallaxLayer offset={1} speed={-0.05} style={{ pointerEvents: 'none' }}>
                <button className={mainPageStyles.testContainer} onClick={() => this.parallax.scrollTo(1)}>
                  test container
                </button>
              </ParallaxLayer>

              <ParallaxLayer offset={2} speed={0.5} style={{ backgroundColor: '#007ea7' }}>
                <span>offset 2</span>
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
