import React from 'react';

function PartList(props){
  let chatList=props.participants.map((participant)=>
    (
    <div className='participant'> 
      <img src={participant.avatar} alt='avatar' className='avatar-part'/>
      <h5> {participant.name}</h5>
      <p>
        {participant.onStage?'on stage':'leave stage'}
      </p>
    </div>
    )
  )

  return(
    <div>
      {chatList}
    </div>
  );
}

export default PartList;