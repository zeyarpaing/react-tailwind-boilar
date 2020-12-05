import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Image from './components/Image';
const arr = ['Hellow', "World", "Blah"];
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{count}</p>
        <button onClick={(e) =>{
          console.log(e)
          setCount(count + 1)
        }
        }>Click to count</button>
      </header>
    </div>
    {
      arr.map((title, idx) => <Image title={title} key={idx} />)
    }
    </>
  );
}

export default App;
