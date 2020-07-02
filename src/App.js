import React from 'react';
import './App.css';
import Footer from './footer'
import logo from './Logo.png'

function App() {
  return (
    <main class="main">
      <header>
        <img src={logo} className="logo" alt="logo"/>
        <span>Chatter</span>
      </header>

      <Footer />
      
    </main>
  );
}

export default App;
