import { useState } from 'react'
import Header from './components/Header';

function Button(){
  const [counter, setCounter] = useState(0);

  function increment(){
    setCounter(counter + 1);
  }

  function decrement(){
    setCounter(counter - 1);
  }

  function reset(){
    setCounter(0);
  }

  return (
    <div>
      <div>
        <button onClick={decrement}>-</button>
        <Result counter={counter}/> 
        <button onClick={increment}>+</button>
        <button style={{ margin:20, display:'block' }} onClick={reset}>Reset</button>  
      </div>            
    </div>
  );
}

function Result({counter}){
  return (<span style={{ margin:20 }}>{counter}</span>);
}

function App() {
  const students = ['junico', 'dwi', 'chandra'];

  return (
    <div>
      <Header name="Junico"/>
      <Header/>
      <hr/>
      <h1>[Array]</h1>
      <ul>
        {
          students.map((student) => (
            <li key={student}>{student}</li>
          ))
        }
      </ul>
      <hr/>
      <h1>[State]</h1>
      <Button/>
    </div>
  );
}

export default App
