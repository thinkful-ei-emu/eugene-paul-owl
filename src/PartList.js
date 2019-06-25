import React from 'react';
import "./PartList.css";

function PartList(props){
  let chatList=props.participants.map((participant)=>{
    


    return <div className='participant'> 
      <img src={participant.avatar} alt='avatar' className='avatar-part'/>
      <div className="part-info">
        <h6 className="part-name"> {participant.name}</h6>
        <div className="part-status">
          {participant.onStage?'on stage':'leave stage'}
        </div>
      </div>
    </div>
    ;
  });
  

  return(
    <div className="part-list">
      {chatList}
    </div>
  );
}

export default PartList;