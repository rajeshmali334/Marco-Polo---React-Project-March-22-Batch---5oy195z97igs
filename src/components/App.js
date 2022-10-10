import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  const [getData,setData]=useState("Marco")
  const [getBtn,setBtn]=useState("Polo")  

  const ChangeHandler=()=>{
    if(getData==="Marco"){
      setData("Polo")
      setBtn("Marco")
    }else if(getData ==='Polo'){
      setData("Marco")
      setBtn("Polo")
    }
  }

  return (
    <div id="main">
      <h1 id="marco-polo">{getData}</h1>
      <button id="marco-polo-toggler" onClick={ChangeHandler}>{getBtn}</button>
    </div>
  )
}


export default App;
