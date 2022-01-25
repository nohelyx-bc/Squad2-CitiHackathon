import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import { ThemeProvider } from "styled-components";

const darkMode={
  pageBackground:'#121212',
  textFont:'#fff'
}
const light={
  pageBackground:'#fff',
  textFont:'black'
}

const themes={
  dark:darkMode
}

function App() {
  const [theme, setTheme]=useState(false);
  

  return (
    <div  className="App">
      {/* style={stylebody} */}
    
    </div>
  );
}

export default App;
