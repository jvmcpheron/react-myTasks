import SaveBtn from "./SaveBtn.js";
import React , {useEffect, useState } from 'react';

const Task = ({day}) => {  
  let revision = 0;
  let revisedText ="";
  let infoText = JSON.parse(localStorage.getItem(day));

  const [entry, setEntry] = useState('');

  const dayEntry = event => {

    // 👇️ access textarea value
    revision++;
    revisedText = event.target.value;
    setEntry(event.target.value);
    console.log(event.target.value);

  };

  if (revision != 0){
    infoText = revisedText
  }

  return (
    <div className="row mb-4 ml-3 mr-3">
      <div className="col-sm-2  text-center d-flex align-items-center justify-content-left"><p>{day}</p></div>
      <div className="col-sm-9 "><textarea className="form-control" rows='3' value={infoText} onChange={dayEntry}>  </textarea></div>
      <SaveBtn infoToSave={entry} entryDay={day} />
      
    </div>
  )
}

export default Task;