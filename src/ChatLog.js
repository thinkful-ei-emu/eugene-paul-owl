import React from 'react';
import ChatMessage from './ChatMessage';

function ChatLog(props){
  let chatList=props.chatEvents.map((event)=>{
    let id=event.participantId;
    let part=props.participants.find((part)=>id===part.id);  

    return <ChatMessage id={id} name={part.name} avatar={part.avatar} type={event.type} message={event.message} time={event.timestamp} />
  }
  )
  console.log(chatList);

  return(
    <div> 
      <div>
        {chatList}
      </div>
      <form className="chat-form">
        <textarea className="chat-form-input" placeholder="Chat" style={{height: '45px'}}>
        </textarea>
        <input type="submit" className="chat-form-submit"/>

      </form>
    </div>
  );
}

export default ChatLog;