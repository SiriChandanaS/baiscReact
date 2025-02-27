import React from 'react'
import Hope from './Hope'
import {useState, useEffect} from 'react'
import If from './If'
import Else from './Else'


const StateMgm = () => {
 

const [city, setCity] = useState("Hyderabad")

useEffect(()=>{
  if(city === "Mumbai"){
    setCity("Banglore")
}else{
  setCity("Delhi")
}

},[city])



  return (
    <div>StateMgm
        <h1>I live in {city}</h1>
        <h2>{city?"Ternaey operator":"Not ternary operator"}</h2>
        {city?<If/>:<Else/>}
    </div>
  )
}

export default StateMgm