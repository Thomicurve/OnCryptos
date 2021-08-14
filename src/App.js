import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Prices from './components/Prices'
import Footer from './components/Footer'

import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Prices/>
      <Footer/>
    </div>
  );
}

export default App;
