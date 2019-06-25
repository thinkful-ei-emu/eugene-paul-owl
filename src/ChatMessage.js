import React from 'react';

function ChatMessage(props){
  if(props.message){
    return (
      <div className="message">
        <img className="user-avatar message-avatar" alt='avatar' src={props.avatar}/>
        <div className="message-body">
          <h6 className="message-body-header">
            {props.name}
          </h6>
          <span className="message-body-time"> {(new Date(props.time)).toTimeString()} </span>
        </div>
        <div className="message-body-content">
          <p>{props.message}</p>
        </div>
      </div>
    );
  }
  else{
    if(props.type==='join'){

    }
    return(
      <div classNAme="system-message">
        <strong>{props.name}</strong>
      </div>


    );

  }
}

export default ChatMessage;