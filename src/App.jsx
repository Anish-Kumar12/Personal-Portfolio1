import { useState , useEffect} from 'react'
import './App.css'
import { SwitchContext } from './context/SwitchContext'
import Header from './components/header/Header';
import Nav from './components/navbar/navbar'
import About from './components/about/About';
import Skill from './components/skills/Skill';
import Expertise from './components/expertise/expertise';
import Qualification from './components/qualifications/qualification';
import Portfolio from './components/portfolio/Portfolio';
import Quotes from './components/quotes/Quotes';
import Contact from './components/contact/Contact';
import Footer from './components/Footer/footer';
import Switch from './components/themeSwitch/Switch';


function App() {
  const mystorage = window.localStorage
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (mystorage.getItem('darkMode') === 'true') setDarkMode(true);
  }, [mystorage, setDarkMode]);

  return (
    <SwitchContext.Provider value={{ darkMode, setDarkMode, mystorage }}>
      <div className={`main-content ${darkMode ? 'bg-dark' : 'bg-light'}`}>
        <Header/>
        <Nav/>
        <About/>
        <Skill/>
        <Expertise/>
        <Qualification/>
        <Portfolio/>
        <Quotes/>
        <Contact/>
        <Footer/>
        <Switch/>
      </div>
      </SwitchContext.Provider>
  )
}

export default App
