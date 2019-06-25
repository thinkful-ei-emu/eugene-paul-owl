import React from 'react';
import './App.css';
import ChatLog from './ChatLog';
import PartList from './PartList';
import Stage from './Stage';

function App(props) {
  return (
    <div className="container">
      <div className="chatter-box">
        <div className='chat-head'>

        </div>
        <div className='chat-results'>
          <ChatLog chatEvents={props.chatEvents} participants={props.participants}/>
          {<PartList participants={props.participants}/>}
        </div>
      </div>
      <div className="stage">
        {<Stage/>}
      </div>
    <div className="control-bar">
      
    </div>
    
    </div>
    
  );
}

export default App;
