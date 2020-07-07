import React, {useState} from 'react';
import './App.css';
import Footer from './footer'
import Message from './message'
import logo from './Logo.png'
import {initialize, useDatu} from 'datu'

function App() {
  const {messages, send} = useDatu()
  console.log(messages)
  
  return (
    <main className ="main">
      <header>
        <img src={logo} className ="logo" alt="logo"/>
        <span>ChatApp</span>
      </header>

      <div className="messages">
        {messages.map((m, i) => {
          return <Message key={i} text={m.text} />
        })}
      </div>

      <Footer
        // functions have the =>, right here I'm passing a function as a function
        onSend={(text) => send({text:text})}
      />
      
    </main>
  );
}

export default App;

const firebaseConfig = {
  apiKey: "AIzaSyDWXVgUqm3xATyzqUqTxcpvsW7U804ctXI",
  authDomain: "chatter20202020.firebaseapp.com",
  databaseURL: "https://chatter20202020.firebaseio.com",
  projectId: "chatter20202020",
  storageBucket: "chatter20202020.appspot.com",
  messagingSenderId: "630230183323",
  appId: "1:630230183323:web:cc967f51fc79e394ca053e"
};

initialize(firebaseConfig)

// map is basically a function which takes a function. It always needs to return a message.

// ... means take the array and spread it out as individual messages and add the last message 'text'
// --> called a spread operator

// basically everything in web dev is a list --> map over those lists to return React componentes --> VERY common scenario

// {} indicates an object