import React , { useState , useEffect } from 'react'

const SaveBtn = ({infoToSave , entryDay}) =>{

    const [items, setItems] = useState([]);


    useEffect(() => {
        localStorage.setItem(entryDay, JSON.stringify(infoToSave));
        }, [items]);


    return(
        <button type="button" className="col-sm-1  btn btn-success text-center" onClick={() => {setItems(infoToSave)
            console.log("Saved: " + infoToSave)}}> save</button>
    );
};


export default SaveBtn;
