import './App.css';
import {useState} from 'react';

function App() { 
     
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false); 
  const [charAllowed, setCharAllowed] = useState(false); 

  return (
       <div className="outer-wrapper">
         <h1> Password Generator </h1>
         <div className = "input-wrapper">
             <input
             type = "range"
             min = {length}
             max = {30}
             /> 
             <label>Password Length</label> 

             <input type = "checkbox"/>
             <label>Character Allowed</label> 

             <input type = "checkbox"/>
             <label>Number Allowed</label>

         </div>
       </div>
  );
}

export default App;
