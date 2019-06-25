import React from 'react';
import './Stage.css';

function gatherOnStage(list){
  return  list.filter((part)=>part.onStage);
}

function Stage(props) {
  console.log (props.participants);
  let stageParts=gatherOnStage(props.participants);
  console.log(stageParts);
  let jsxList=stageParts.map((part)=>(
    <div className='part-on-stage'>
<<<<<<< HEAD
      <div className="name">
      {part.name}
      <br />
      <hr></hr>
      
      </div>
      <div className="avatar-stage"><img className = "avatar-img" src = {part.avatar} alt = "avatar" /></div>
=======
      <div className="name">{part.name}</div>
      <div className="avatar"><img src = {part.avatar}/></div>
>>>>>>> 7c6f4ae4d7898c67dffea013b298e1a18de898fb
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
        <p className = "name">
          It appears no is on stage
        </p>
      </div>
    );
  }

}

export default Stage;