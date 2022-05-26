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

function App() {
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
         {/* <div id="preloader"></div> */}
         <Footer/>
    </div>
  );
}

export default App;
