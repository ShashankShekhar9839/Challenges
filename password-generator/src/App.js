import "./App.css";
import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  let passRef = useRef(); 

  let generatePassword = useCallback(() => {
    let string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let nums = "0123456789";
    let chars = "@#$%&*-+=/?";
    if (numberAllowed) string = string + nums;
    if (charAllowed) string = string + chars;
    let randomIndex;
    let pass = "";
    for (let i = 0; i < length; i++) {
      randomIndex = Math.floor(Math.random() * string.length);
      pass = pass + string.charAt(randomIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    generatePassword();
  }, [numberAllowed, charAllowed, length, setPassword]); 

  const handleCopy = () => {
    passRef.current.select();
    window.navigator.clipboard.writeText(password);
  }

  return (
    <div className="outer-wrapper">
      <h1> Password Generator </h1>
      
      <div className="top-wrapper">
      <input type="string" value={password} readOnly  ref={passRef}/>
      <button onClick={handleCopy}>Copy Password</button>
      </div>

      <div className="input-wrapper">
        <input
          type="range"
          min={8}
          max={30}
          value={length}
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
        <label>Password Length : {length}</label>

        <input type="checkbox" onChange={() => setCharAllowed(!charAllowed)} />
        <label>Character Allowed</label>

        <input
          type="checkbox"
          onChange={() => setNumberAllowed(!numberAllowed)}
        />
        <label>Number Allowed</label>
      </div>
    </div>
  );
}

export default App;
