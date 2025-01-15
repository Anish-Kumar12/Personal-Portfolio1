import { useState , useEffect} from 'react'
import './App.css'
import { SwitchContext } from './context/SwitchContext'
import Header from './components/header/Header.jsx';

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
      </div>
      </SwitchContext.Provider>
  )
}

export default App
