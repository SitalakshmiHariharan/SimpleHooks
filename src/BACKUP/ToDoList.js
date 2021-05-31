import React, {useState} from 'react'

export default function ToDoList() {
    
    const[todo,setTodo]=useState("")
    const[list,setList]=useState([])

    const handleSubmit=(event)=>{
        event.preventDefault();
        setList([...list,todo])
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={todo} onChange={e=>setTodo(e.target.value)} placeholder="Enter Task"></input>
                <input type="submit" value="Submit"></input>
            </form> 
            <br></br>
            {list}                      
        </div>
    )
}
