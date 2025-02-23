import React from 'react'

const Hope = (props) => {

    const {name, age, city}=props.var1


  return (
    <div>Hope
        <h1 style={{backgroundImage: 'linear-gradient(to right,red, pink,white,white,pink, blue)'}}>{city}</h1>
    </div>
  )
}

export default Hope