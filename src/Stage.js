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
<<<<<<< HEAD
      <div className="avatar"><img src = {part.avatar}/></div>
=======
      <div className="avatar">picture here</div>
>>>>>>> c30303a2efcd527cd98b7afeaae2ac9ce53c4cb4
    </div>
    )
  );
  if(stageParts.length) {
    return (
<<<<<<< HEAD
      <div className="grid-2">{jsxList}</div>
=======
      <div>
        {jsxList}
      </div>
>>>>>>> c30303a2efcd527cd98b7afeaae2ac9ce53c4cb4
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