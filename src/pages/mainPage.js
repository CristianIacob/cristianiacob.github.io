import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/seo';
import mainPageStyles from './styles/mainPage.module.css';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons.cjs';
import FloatingContainer from '../components/FloatingContainer';

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
                factor={4}
                style={{
                  backgroundImage: `url(https://w.wallhaven.cc/full/ym/wallhaven-ymq2kx.jpg)`,
                  backgroundSize: 'cover',
                  backgroundAttachment: 'fixed',
                  filter: 'blur(4.5px)',
                  transform: 'scale(1.05)',
                }}
              />

              <ParallaxLayer offset={0} speed={-0.15}>
                <Header />
              </ParallaxLayer>

              <ParallaxLayer
                offset={0.12}
                speed={-0.35}
                //style={{ background: 'red' }}
              >
                <FloatingContainer title="First Container" />
              </ParallaxLayer>

              <ParallaxLayer
                offset={1.22}
                speed={-0.15}
                //</Parallax>style={{ background: 'blue' }}
              >
                <FloatingContainer title="Second Container">
                  <span className={mainPageStyles.offsetElement}>Colored Text</span>
                  <button onClick={() => this.parallax.scrollTo(2)}>Next</button>
                </FloatingContainer>
              </ParallaxLayer>

              <ParallaxLayer offset={1} speed={0.5} style={{ pointerEvents: 'none' }}>
                <button className={mainPageStyles.testContainer} onClick={() => this.parallax.scrollTo(1)}>
                  test container
                </button>
              </ParallaxLayer>

              <ParallaxLayer
                offset={2.12}
                speed={0.22}
                //style={{ backgroundColor: '#007ea7' }}
              >
                <FloatingContainer title="Third Container">
                  <button onClick={() => this.parallax.scrollTo(0)}>Back Top</button>
                  <Footer />
                </FloatingContainer>
              </ParallaxLayer>
            </Parallax>
          </div>
        </div>
      </Layout>
    );
  }
}

export default MainPage;
