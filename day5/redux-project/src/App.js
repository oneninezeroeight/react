import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import store from './stores'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <hr />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
