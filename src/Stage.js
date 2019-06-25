import React from 'react';

function gatherOnStage(list){
  return  list.filter((part)=>part.onStage);
}

function Stage(props) {
  let stageParts=gatherOnStage(props.participants);
  let jsxList=stageParts.map((part)=>(
    <div className='part-on-stage'>
      <div className="name">{part.name}</div>
      <div className="avatar">picture here</div>
    </div>
    )
  );
  if(stageParts.length) {
    return (
      <div>
        {jsxList}
      </div>
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