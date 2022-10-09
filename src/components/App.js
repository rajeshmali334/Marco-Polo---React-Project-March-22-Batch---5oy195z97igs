import React, {useState} from 'react'
import '../styles/App.css';
const App = () => {
  const [text, setText]=useState("Marco");
  const [buttentext, setButtenText]=useState("Polo");
  const handle=()=>{
    setText("Polo");
    setButtenText("Marco");
  }
  return (
    <div id="main">
        <h1 id="marco-polo">{text}</h1>
        <button onClick={handle}  id="marco-polo-toggler" >{buttentext}</button>
    </div>
  )
}


export default App;
