import React from 'react';
import logo from './logo.svg';
import './App.css';
import Yfragment from './components/Yfragment/Yfragment'
import Lazy from './components/Lazy/Lazy'
import HOC from './components/HOC/HOC'
import Footer from './components/Footer/Footer'
// const Lazy = React.lazy(() => import('./components/Lazy/Lazy'));

function App() {
  return (
    <div className="App">
      <Yfragment/>
      <Lazy/>
      <HOC/>
      <Footer/>
    </div>
  );
}

export default App;
