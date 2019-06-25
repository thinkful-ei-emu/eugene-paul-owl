import React from 'react';
import './ChatBar.css';

export default function ChatBar(props){
  return(
    <div className="chat-bar">
      <div>Chat</div>
      <div>Participants ({props.participants.length})</div>
      <img src="https://nest.com/support/images/misc-assets-icons/settings-icon.png"/>
      <img src="https://www.pinclipart.com/picdir/middle/24-243342_link-chain-url-uri-anchor-svg-png-icon.png"/>
      <img src= "https://cdn3.iconfinder.com/data/icons/modifiers-essential/48/v-18-512.png"/>

    </div>
  );

}