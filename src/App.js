import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Tasks from './components/Tasks';
import {useState} from 'react';

function App() {
  const [tasks , setTasks] = useState ([
    
  ]);


  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
        <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
