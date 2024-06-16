import React from 'react';
import About from '../components/About';
import Features from '../components/Features';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import ProgressSlider from '../components/progress-slider';
import Product from '../components/Product';
import SilderImg01 from '/public/totem.png'
import SilderImg02 from '/public/cacao_70.png'
import SilderImg03 from '/public/ag.jpeg'
import SilderImg04 from '/milan.webp'
import SilderIcon01 from '/public/ps-icon-01.svg'
import SilderIcon02 from '/public/ps-icon-02.svg'
import SilderIcon03 from '/public/ps-icon-03.svg'
import SilderIcon04 from '/public/ps-icon-04.svg'
const items = [
  {
    img: SilderImg01,
    desc: 'Totem Acoustic',
    buttonIcon: SilderIcon01,
  },
  {
    img: SilderImg02,
    desc: 'Cacao 70',
    buttonIcon: SilderIcon02,
  },
  {
    img: SilderImg03,
    desc: 'A&G Promotion',
    buttonIcon: SilderIcon03,
  },
  {
    img: SilderImg04,
    desc: 'Milan Pole Dance Studio',
    buttonIcon: SilderIcon04,
  },
]



const App = () => {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
            <MainHero />
          </div>
        </div>
        <MainHeroImage />
      </div>
      <LazyShow>
        <Product />
      </LazyShow>
      <LazyShow>
        <ProgressSlider items={items}/>
      </LazyShow>

      <LazyShow>
        <Features />
      </LazyShow>
      <LazyShow>
          <About />
      </LazyShow>

    </div>
  );
};

export default App;
