import React from 'react';

function PartList(props){
  let chatList=props.participants.map((participant)=>
    (
    <div className='participant'> 
      <img src={participant.avatar} alt='avatar' className='avatar'/>
      <h3> {participant.name}</h3>
      <p>
        {participant.true}
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