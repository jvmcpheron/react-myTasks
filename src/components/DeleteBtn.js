import React , { useState } from 'react'

const SaveBtn = () =>{

    const [text , setText] = useState(0);

    return(
        <button type="button" className="col-sm-12  btn btn-danger text-center" onClick={() => setText(text + 1)}> { text }</button>
    );
};


export default SaveBtn;
