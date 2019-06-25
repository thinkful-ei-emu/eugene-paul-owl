import React from 'react';
import ChatMessage from './ChatMessage';
import "./ChatLog.css";

function ChatLog(props){
  let chatList=props.chatEvents.map((event)=>{
    let id=event.participantId;
    let part=props.participants.find((part)=>id===part.id);  

    return <ChatMessage id={id} name={part.name} avatar={part.avatar} type={event.type} message={event.message} time={event.timestamp} />
  }
  )
  console.log(chatList);

  return(
    <div class="chat-flex-wrapper"> 
      <div class="chat-log">
        {chatList}
      </div>
      <form className="chat-form">
        <textarea className="chat-form-input" placeholder="Chat" style={{height: '45px'}}>
        </textarea>

      </form>
    </div>
  );
}

export default ChatLog;