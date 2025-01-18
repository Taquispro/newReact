import "./App.css";
import { useState } from "react";
//note that change in variable dont change the Ui therefore we use states
function App() {
  const [counter, setCounter] = useState(0);
  const addValue = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }

    console.log(counter);
  };
  return (
    <>
      <div>
        <h1>TaquIsPro</h1>
        <h2>Counter Value : {counter}</h2>
        <button onClick={addValue}>Add Value</button>
        <button onClick={removeValue}>Remove Value</button>
      </div>
    </>
  );
}

export default App;
