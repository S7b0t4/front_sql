import './App.css';
import {useState} from "react";

function App() {
  const [data, setData] = useState(null)

  async function fetchHandler(){
    const response = await fetch("/api");
    console.log(response)
    const data = response.json()
    setData(data)
    //const data = await response.json();
  }
  fetchHandler()
  return (
    <div className="App">
      <img src={data} alt=""/>
    </div>
  );
}

export default App;
