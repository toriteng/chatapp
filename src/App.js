import React, {useState, useEffect} from 'react';
import './App.css';
import Footer from './footer'
import Message from './message'
import logo from './Logo.png'
import {initialize, useDatu} from 'datu'
import {BrowserRouter, Route} from 'react-router-dom'
import NamePicker from './namePicker'

function App() {
  useEffect(()=>{
    const path = window.location.pathname
    if(path.length<2) window.location.pathname='/home'
  }, [])
  return <BrowserRouter>
    <Route path="/:room" component={Room} />
  </BrowserRouter>
}

function Room(props) {
  const room = props.match.params.room
  const {messages, send} = useDatu(room)
  const [name, setName] = useState('')
  
  return (
    <main className ="main">

      <header>
        <div style={{display:'flex', alignItems:'center'}}>
          <img src={logo} className ="logo" alt="logo"/>
          <span>ChatApp</span>
        </div>
        <NamePicker saveName={setName} />
      </header>

      <div className="messages">
        {messages.map((m, i) => {
          return <Message key={i} text={m.text}
            name={m.name} isMe = {m.name===name}
          />
        })}
      </div>

      <Footer
        // functions have the =>, right here I'm passing a function as a function
        onSend={text => send({text, room, name})}
      />
      
    </main>
  );
}

export default App;

const firebaseConfig = {
  apiKey: "AIzaSyCWETEXkXePjeBMHNE_9wmp-gqXdqz_jTI",
  authDomain: "chatapp-9525c.firebaseapp.com",
  databaseURL: "https://chatapp-9525c.firebaseio.com",
  projectId: "chatapp-9525c",
  storageBucket: "chatapp-9525c.appspot.com",
  messagingSenderId: "758476115056",
  appId: "1:758476115056:web:fd1fcc359bc89ae562b8b5",
  measurementId: "G-ZMCQ7QX3WN"
};

initialize(firebaseConfig)

// map is basically a function which takes a function. It always needs to return a message.

// ... means take the array and spread it out as individual messages and add the last message 'text'
// --> called a spread operator

// basically everything in web dev is a list --> map over those lists to return React componentes --> VERY common scenario

// {} indicates an object