import React from 'react';
import './App.css';
import ChatLog from './ChatLog';
import PartList from './PartList';
import Stage from './Stage';
import ChatBar from './ChatBar';

function App(props) {
  return (
    <div className="container">
      <div className="chatter-box">
        
        <ChatBar participants={props.participants}/>
        <div className='chat-results'>
          <ChatLog chatEvents={props.chatEvents} participants={props.participants}/>
          {/* <PartList participants={props.participants}/> */}
        </div>
      </div>
      <div className="stage">
        <Stage participants={props.participants}/>
      </div>
      <div className="control-bar">

      </div>
    
    </div>
    
  );
}

export default App;
