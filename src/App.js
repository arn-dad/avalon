import { useEffect, useState } from 'react';
import TopBar from './sections/topbar';
import Header from './sections/header';
import Hero from './sections/hero';
import Services from './sections/services';
import Footer from './sections/footer';
import AboutUs from './sections/about-us';
import Gallery from './sections/gallery';
import './service/i18n';
import './css/main.css'
import './App.css';
import { init } from './scripts'
import Preloader from './sections/preloader';
import { uiInit } from './scripts/main';



function App() {
  const [stack, setStack] = useState([]);

  useEffect(() => {
    uiInit(stack);

    setTimeout(() => {
      stack.forEach((onLoad) => {
        onLoad()
      })
      console.log('herous');
    }, 1000);
    init();
  }, [])

  return (
    <div className="App">
         <TopBar/>
         <Header/>
         <Hero />
         <main id="main">
          <AboutUs />
          <section id="about" className="about"></section>
          <section id="counts" className="counts"></section>
          <Gallery/>
          <Services/>
         </main>
         <Preloader />
         <Footer/>
    </div>
  );
}

export default App;
