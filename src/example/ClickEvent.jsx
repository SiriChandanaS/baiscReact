import React from 'react'

import { useState } from 'react'


const ClickEvent = () => {

    const [number, setNumber] = useState(0)
    const [type,setType] =useState("")
    const [col,setCol] = useState("")

    const increment=()=>{
        
        setNumber(number+1)

    }
    const decrement=()=>{
       
        setNumber(number-1)
    
        
    }
    const reset=()=>{
      
        setNumber(0)
       
    }
    const typee=()=>{
        if(number>0){
            
            return "Positive Number"

        }
        else if(number<0){
            return 'Negative Number'
        }
        else{
            return 'Zero'
        }
    }


  return (
    <div>
        <h1 style={{color:number<0 ? 'red': number==0 ? 'blue' : 'green'}}>{number}</h1>
        <button onClick={increment} style={{backgroundColor:'green', color:'white', borderRadius:5, marginRight:10}}>Increment</button>
        <button onClick={decrement} style={{backgroundColor:'red', color:'white', borderRadius:5,marginLeft:10}}>Decrement</button>
        <br></br>
        <br></br>
        <button onClick={reset} style={{backgroundColor:'blue', color:'white', borderRadius:5}}>Reset</button>
        <br></br>
        <h2 style={{fontSize:number+50, color:number<0 ? 'red': number==0 ? 'blue' : 'green'}}>The number is: {typee()}</h2>
    </div>
  )
}

export default ClickEvent