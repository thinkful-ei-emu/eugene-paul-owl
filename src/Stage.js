import React from 'react';

function gatherOnStage(list){
  return  list.filter((part)=>part.onStage);
}

function Stage(props) {
  console.log (props.participants);
  let stageParts=gatherOnStage(props.participants);
  console.log(stageParts);
  let jsxList=stageParts.map((part)=>(
    <div className='part-on-stage'>
      <div className="name">{part.name}</div>
      <div className="avatar"><img src = {part.avatar}/></div>
    </div>
    )
  );
  if(stageParts.length) {
    return (
      <div className="grid-2">{jsxList}</div>
    )
  }
  else{
    return (
      <div>
        <p>
          It appears no is on stage
        </p>
      </div>
    );
  }

}

export default Stage;