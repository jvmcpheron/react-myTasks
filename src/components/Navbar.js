import React from 'react';
import Menu from './Menu';

const navbar = () => {
  return (
    <div id="topSect"className="container-fluid d-flex pb-5">
        <div className="row">
            <div className="col">
                <h1 id="title"className=" mt-5 mb-4 pl-2">MyTasks</h1>
            </div>
            <div className="row mx-auto">
            <Menu text='New Task'/>
            </div>
        </div>
    </div>
  )
}

export default navbar