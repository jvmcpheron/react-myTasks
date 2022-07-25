import React from 'react';

const Menu = ({text}) => {

const showToDo = () => {
    console.log("todo clicked")
};

const showAdd = () => {
    console.log("add clicked")
};

return (<div className="dropdown">
  <button onClick={showAdd}className="btn btn-primary" type="button" id="addTask">
    {text}
  </button>
  </div>)

};

export default Menu;