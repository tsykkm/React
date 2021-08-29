import React from 'react'
import logo from './logo.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import counterModule from './modules/counterModule'

function App() {
  // dispatch の取得
  const dispatch = useDispatch()
  // state の取得
  const counter = useSelector(state => state.counter)

  const increment = () => dispatch(counterModule.actions.increment())
  const decrement = () => dispatch(counterModule.actions.decrement())

  return (
    <div className="App">
      <p>{counter}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default App
