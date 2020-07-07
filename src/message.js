import React from 'react'

function Message(props){
    return <div className="message">
        <div className = "message-bibble">
            {props.text}
        </div>
    </div>
}

export default Message