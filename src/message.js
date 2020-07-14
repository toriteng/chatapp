import React from 'react'

function Message(props){
    return <div className="message" style={{
        flexDirection: props.isMe?'row-reverse':'row'
    }}>
        <div>
            <div className="message-name">
                {props.name || 'Unknown'}
            </div>

            <div className = "message-bubble">
                {props.text}
            </div>
        </div>
    </div>
}

export default Message