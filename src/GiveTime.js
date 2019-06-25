function giveTime(date){
  let hours= date.getHours();
  let AMPM= hours>=12?'PM':'AM';
  if(hours>12){
    hours-=12;
  }

  return `${hours}:${date.getMinutes()} ${AMPM}`;
}

export default giveTime;