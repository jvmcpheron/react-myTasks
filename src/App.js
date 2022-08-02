import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Title from './components/Title';
import Tasks from './components/Tasks';
import Script from "./components/Script.js";
import DeleteBtn from "./components/DeleteBtn.js";
import React , {useState , useEffect} from 'react';



function App() {



  

  
  return (
    <div className="App">
      <header className="App-header">
        <Title />
      </header>
        <div className="row mt-4"></div>
        <Tasks />
        <DeleteBtn />
        <Script />
    </div>
  );
}

export default App;
