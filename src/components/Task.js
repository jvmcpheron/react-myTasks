import React from 'react'

const Task = ({day}) => {

  return (
    <div className="row mb-4 ml-3 mr-3">
      <div className="col-sm-2  text-center d-flex align-items-center justify-content-left"><p>{day}</p></div>
      <div className="col-sm-9  col-md-9"><textarea className="form-control" rows='3'></textarea></div>
      <button type="button" className="col-sm-1  btn btn-success text-center" onClick={console.log("clicked")}>Save</button>
    </div>
  )
}

export default Task;