import React from 'react';
import './ChatMessage.css'

function getTime(date){
  let hours= date.getHours();
  let AMPM= hours>=12?'PM':'AM';
  if(hours>12){
    hours-=12;
  }

  return `${hours}:${date.getMinutes()} ${AMPM}`;
}

function ChatMessage(props){
  if(props.message){
    return (
      <div className="message">
        <img className="user-avatar message-avatar" alt='avatar' src={props.avatar}/>
        <div className="message-body">
          <h6 className="message-body-header">
            {props.name}
          </h6>
          <span className="message-body-time"> {getTime(new Date(props.time))} </span>
          <div className="message-body-content">
            <p>{props.message}</p>
          </div>
        </div>
      </div>
    );
  }
  else{
    let message;
    if(props.type==='join'){
      message='joined';
    }
    else if(props.type==='thumbs-up'){
      message='gave a thumbs up'
    }
    else if(props.type==='thumbs-down'){
      message='gave a thumbs down'
    }
    else if(props.type==='raise-hands'){
      message='raised their hand'
    }
    else if(props.type==='clap'){
      message='clapped'
    }
    else if(props.type==='leave'){
      message='left'
    }
    else if(props.type==='join-stage'){
      message='joined the stage'
    }
    else if(props.type==='leave-stage'){
      message='left the stage'
    }
    return(
      <div className="system-message">
        <strong>{props.name}</strong> 
        <span> {message}</span>
      </div>


    );

  }
}

export default ChatMessage;