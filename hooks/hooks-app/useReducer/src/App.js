import React, { createContext } from 'react'
import './App.css';
import Bank from './pages/bank/Bank'

export const UserContext = createContext();
export const LanguageContext = createContext();
export const CountContext = createContext();


function App() {

  return (
    <div className="App">
      <h2>#5 useReducer</h2>
      <Bank />
    </div>
  );
}

export default App;
