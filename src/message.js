import React from 'react'

function Message(props){
    return <div className="message">
        <div className = "message-bubble">
            {props.text}
        </div>
    </div>
}

export default Message