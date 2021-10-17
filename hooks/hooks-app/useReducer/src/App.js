import React, { useReducer, createContext, useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import FormHook from './components/FormHook'
import ItemHook from './components/ItemHook'
import ClassEffectComponent from './components/ClassEffectComponent'
import EffectHook from './components/EffectHook'
import MouseEventEffectHook from './components/MouseEventEffectHook'
import DataFetchEffectHook from './components/DataFetchEffectHook'
import DataFetchById from './components/DataFetchById'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ComponentC from './components/ComponentC'
import CounterReducer from './components/CounterReducer'
//import WrapComponent from './components/nousecallback/WrapComponent'
import WrapComponent from './components/usecallback/WrapComponent'
import axios from 'axios'

export const UserContext = createContext();
export const LanguageContext = createContext();

export const CountContext = createContext();

const initial = {
  // firstCounter: 0,
  loading: true,
  error: '',
  post: {},
};

const reducer = (state, action) => {
  // switch (action.type) {
  //     case 'incriment1':
  //         // 更新前のstateを展開し、objのマージを行う
  //         return {...state, firstCounter: state.firstCounter + action.value};
  //     case 'decriment1':
  //         return {...state, firstCounter: state.firstCounter - action.value};
  //     case 'reset':
  //         return initial
  //     default:
  //         return state
  // }
  switch (action.type) {
    case 'FETCH_SUCCESS':
        // 更新前のstateを展開し、objのマージを行う
        return {
          loading: false,
          post: action.payload,
          error: '',
        };
    case 'FETCH_ERROR':
      return {
        loading: false,
        post: {},
        error: 'データ取得失敗'
      };
    default:
        return state
}
}

function App() {
  // const [user, setUser] = useState({ name: 'yamada', age: '32' });
  // const [lang, setLang] = useState('日本語');
  // const [state, dispatch] = useReducer(reducer, initial);
  // useEffect(() => {
  //   const req = axios.get('https://jsonplaceholder.typicode.com/posts/1');
  //   req.then(res => {
  //     dispatch({type: 'FETCH_SUCCESS', payload: res.data});
  //   }).catch(err =>{
  //     dispatch({type: 'FETCH_ERROR'});
  //   })
  // }, [])

  return (
    <div className="App">
        {/* <UserContext.Provider value={user}>
          <LanguageContext.Provider value={lang}>
            <ComponentC />
          </LanguageContext.Provider>
        </UserContext.Provider> */}
        {/* <Counter />
        <FormHook />
        <ItemHook />
        <ClassEffectComponent />
        <EffectHook />
        <MouseEventEffectHook />
        <DataFetchEffectHook />
        <DataFetchById /> */}
        {/* <div>{count.firstCounter}</div>
        <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
          <ComponentA />
          <ComponentB />
          <ComponentC />
        </CountContext.Provider> */}
      {/* <h1>{state.loading ? 'Loading....' : state.post.title}</h1>
      <h1>{state.error ? state.error : null}</h1> */}
      {/* useMemo、useCallbackを使わない場合はボタンを押すたびに全てのconsole.logが描画される */}
      <WrapComponent/>
    </div>
  );
}

export default App;
