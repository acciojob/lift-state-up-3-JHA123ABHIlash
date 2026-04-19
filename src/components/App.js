
import React, { useState } from "react";
import './../styles/App.css';
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

const App = () => {
  const [selectedOption , setSelectedOption]=useState("");

  function handleChange(e){
    setSelectedOption(e.target.value);
  }
  
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <ChildComponent1 selectedOption={selectedOption } handleChange={handleChange}/>
      <ChildComponent2 selectedOption={selectedOption } handleChange={handleChange}/>
      <p>Selected Option: {selectedOption}</p>
        
    </div>
  )
}

export default App
