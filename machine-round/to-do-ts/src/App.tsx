import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] =  useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");


  const handlerAdd = () => {
    setTasks((prev : string[]) => [...prev, inputValue]);
    setInputValue("");
  }

  const handdleChange = (e:any) => {
    let value = e.target.value;
    if(value === "") return;
    setInputValue(value);
  }


  return (
    <>
      <div>
        <h3>Hello, World!</h3>
        <input 
        onChange={handdleChange}
        type="text" placeholder="Enter a task" />
        <button onClick={handlerAdd}>Add</button>
<ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
