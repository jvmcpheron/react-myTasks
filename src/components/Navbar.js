import React from 'react'

const navbar = () => {
  return (
    <div id="topSect"className="container-fluid d-flex pb-5">
        <div className="row">
            <div className="col">
                <h1 id="title"className=" mt-5 mb-4 pl-2">MyTasks</h1>
            </div>
            <div className="row mx-auto">
            <div className="dropdown">
  <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Menu
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button id="to-do-btn"className="dropdown-item" type="button">To-Do</button>
    <button id="new-task-btn"className="dropdown-item" type="button">New Task</button>
  </div>
</div>
            </div>
        </div>
    </div>
  )
}

export default navbar