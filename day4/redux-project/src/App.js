import React from 'react';
import 'weui'
import './App.css';
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import Panel from './components/Panel/Panel'

function App() {
  return (
    <div className="App">
      <Header/>
      <Search/>
      <Panel/>
    </div>
  );
}

export default App;
