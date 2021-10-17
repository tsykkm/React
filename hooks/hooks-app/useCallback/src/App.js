import React from 'react'
import './App.css';
import WrapComponent from './components/usecallback/WrapComponent'

function App() {
  return (
    <div className="App">
      {/* useMemo、useCallbackを使わない場合はボタンを押すたびに全てのconsole.logが描画される */}
      <WrapComponent/>
    </div>
  );
}

export default App;
