import React from 'react'

export default function ChildComponent1({handleChange}) {
  return (
    <div>
        <h2>Child Component1</h2>
        <button value="Option 1" onClick={handleChange}>Option 1</button>

    </div>
  )
}
