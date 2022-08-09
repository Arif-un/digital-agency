/* eslint-disable import/extensions */
import './assets/CSS/global.css';
import footerBackground from './assets/images/footer.webp';
import backgroundImg from './assets/images/shape-1.png';
import About from './components/About';
import Counter from './components/Counter';
import Header from './components/Header';
import RecentWork from './components/RecentWork';
import Services from './components/Services';

import Footer from './components/Footer';
import OurNews from './components/OurNews';
import OurServices from './components/OurServices';
import Testimonianls from './components/Testimonianls';

function App() {
  console.log('footer', footerBackground);
  console.log('bg', backgroundImg);

  return (
    <div className="App">
      <Header backgroundImg={backgroundImg} />
      <Services />
      <About />
      <Counter />
      <RecentWork />
      <OurServices />
      <Testimonianls />
      <OurNews />
      <Footer footerBackground={footerBackground} />
    </div>
  );
}

export default App;
