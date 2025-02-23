import React from 'react'

function Test212(props) {

  const {language, duration,certification}=<props className="var2"></props>
  const {name, age, city}=<props className="var1"></props>

  return (
    <div className='container'>
      <p className='para'>Stay Positive</p>
      <h2 style={{color:"purple"}}>{props.name}</h2>
      <h1 style={{backgroundColor:"green"}}>{age}</h1>
      </div>
  )
}

export default Test212