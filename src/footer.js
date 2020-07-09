import React, {useState} from 'react'

function Footer(props){
  console.log(props)  
  const [text,setText] = useState('')
    return <footer className="footer">
    <input className ="text-input" value={text} 
        onChange={e=> setText(e.target.value)}
        onKeyPress={e=> {
          if(e.key==='Enter' && text) {
            props.onSend(text)
            setText('')
          }
        }}
        placeholder="Type your message here!"
    />
    <button className = "send-button"
      onClick={() => props.onSend(text)}>
      ⬆
    </button>
  </footer>
}

export default Footer