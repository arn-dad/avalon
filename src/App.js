import logo from './logo.svg';
import './App.css';
import './scripts'
import TopBar from './sections/topbar';
import Header from './sections/header';
import Hero from './sections/hero';
import Main from './sections/main';


function App() {
  return (
    <div className="App">
     <TopBar/>
     <Header/>
     <Hero />
     <Main />
    </div>
  );
}

export default App;
