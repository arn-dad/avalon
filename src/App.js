import TopBar from './sections/topbar';
import Header from './sections/header';
import Hero from './sections/hero';
import Services from './sections/services';
import Footer from './sections/footer';

import './scripts'
import './css/main.css'
import './App.css';
import AboutUs from './sections/about-us';
import Gallery from './sections/gallery';


function App() {
  return (
    <div className="App">
         <TopBar/>
         <Header/>
         <Hero />
         <main id="main">
          <AboutUs />
          <Gallery/>
          <Services/>
         </main>
         {/* <div id="preloader"></div> */}
         <Footer/>
    </div>
  );
}

export default App;
