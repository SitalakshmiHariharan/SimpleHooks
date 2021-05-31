import React, {useState} from 'react'


export default function Counter() {

    const initialCount = 0;

    const [counter,setCounter] = useState(initialCount)

    const increment = () => {
        setCounter (counter + 1) 
    }

    const decrement = () => {
        setCounter (counter - 1) 
    }

    const reset =() => {
        setCounter (initialCount)
    }

    return (
        <div>
           <p> {counter} </p>
        <button onClick = {increment}> INCREMENT </button>
        <button onClick = {decrement}> DECREMENT </button>
        <button onClick = {reset}> RESET </button>
            
        </div>
    )
}


/*
return (
        <div>
           <p> {counter} </p>
        <button onClick = {() => {setCounter (counter + 1) }}> INCREMENT </button>
        <button onClick = {() => {setCounter (counter - 1) }}> DECREMENT </button>
        <button onClick = {reset()}> RESET </button>
            
        </div>
    )*/