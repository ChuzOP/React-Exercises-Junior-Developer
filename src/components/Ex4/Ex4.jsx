import React, { useState } from 'react'
import './ex4.css'
import Count from './Count'
const Ex4 = () => {
  const [count, setCount] = useState(0)
  return (
    <div className='ex4'>
      <Count count={count} setCount={setCount}/>
    </div>
  )
}

export default Ex4