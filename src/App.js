import React, {useState} from 'react';
import './App.css';
import Footer from './footer'
import Message from './message'
import logo from './Logo.png'

function App() {
  const [messages, setMessages] = useState([])
  
  return (
    <main className ="main">
      <header>
        <img src={logo} className ="logo" alt="logo"/>
        <span>ChatApp</span>
      </header>

      {messages.map((m, i) => <Message key={i} text={m} /> )}

      <Footer
        // functions have the =>, right here I'm passing a function as a function
        onSend={(text) => setMessages([...messages, text])}
      />
      
    </main>
  );
}

export default App;


// map is basically a function which takes a function. It always needs to return a message.

// ... means take the array and spread it out as individual messages and add the last message 'text'
// --> called a spread operator

// basically everything in web dev is a list --> map over those lists to return React componentes --> VERY common scenario