import { useState , useEffect} from 'react'
import './App.css'
import { SwitchContext } from './context/SwitchContext'
import Header from './components/header/Header';
import Nav from './components/navbar/navbar'

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
      </div>
      </SwitchContext.Provider>
  )
}

export default App
