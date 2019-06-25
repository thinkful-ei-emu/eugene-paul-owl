import React from 'react';

function gatherOnStage(list){
  return  list.filter((part)=>part.OnStage);
}

function Stage(props) {
  let stageParts=gatherOnStage(props.participants);
  let jsxList=stageParts.map((part)=>(
    <div className='part-on-stage'>
      <div className="name">{}</div>
      <div className="avatar"></div>
    </div>
    )
  );
  if(stageParts.length) {
    return (
      <div>
        <div><h3>{props.name}</h3></div>
        <div className = "avatar-container">
          <img src = {props.avatar} alt ="avatar"/>
        </div>

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