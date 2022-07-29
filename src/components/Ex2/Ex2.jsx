import React from 'react'
import './ex2.css'

const Ex2 = () => {
  const handleButton = () =>{
    alert("yepa")
  }
  return (
    <div className='ex2'>
        <button onClick={handleButton}>Click Me!</button>
    </div>
  )
}

export default Ex2