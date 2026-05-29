import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  const Increase = ()=>{
    console.log("Increase");
    setNum(num+1)
  }

    const Decrease = ()=>{
    console.log("Decrease");
    setNum(num-1)
  }

  return (
    <div className='container'>
      
      <h1>
 {num}
      </h1>
      <div className='btn'>
      <button className='btn1' onClick={Increase}>
        Increase
      </button>
      <button className='btn2' onClick={Decrease}>
        Decrease
      </button>
      </div>
    </div>
  )
}

export default App
