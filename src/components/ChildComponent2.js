import React from 'react'

export default function ChildComponent2({handleChange}) {
  return (
    <div>
        <h2>Child Component2</h2>
        <button value="Option 2" onClick={handleChange}>Option 2</button>
    </div>
  )
}
