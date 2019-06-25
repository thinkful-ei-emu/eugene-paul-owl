import React from 'react';
import participants from './Store'

function Stage(props) {
  if(props.onStage) {
    return (
      <div>
        <div><h3>{props.name}</h3></div>
        <div className = "avatar-container">
          <img src = {props.avatar} alt ="avatar"/>
        </div>
      </div>
    )
  }

}

export default Stage;