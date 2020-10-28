import React from 'react'
import "./Message.css"
import {Avatar} from "@material-ui/core"

function Message() {
    return (
        <div className="message">
            <Avatar/>
            <div className="message__info">
                <h4>jx3ri<span className="message__timestamp">timestamp</span></h4>
                <p>this is a message</p>
            </div>
        </div>
    )
}

export default Message
