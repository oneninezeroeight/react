import React from 'react';
import 'weui';
import Header from './components/Header'
import Search from './components/Search'
import Panel from './components/Panel'
function App() {
  return (
    <div className="App">
      <Header/>
      <Search/>
      <Panel />
    </div>
  );
}

export default App;
