import React, { useState } from 'react'

function TodoInput({toget}) {         //always receive data in the form of object
const[toadd,setToadd]=useState("")

const foradd=()=>{
    const payload={
        "title":toadd,
        "status":false,
        // "id":Math.random()*100
    }
    toget(payload);
    setToadd("")
}

return (
        <div style={{marginLeft:"30px"}}>
            Your Todo list :
            <input type="text" onChange={(e)=>setToadd(e.target.value)} value={toadd}/>
            <button onClick={foradd}>Add Todo</button>
        </div>
    )
}

export default TodoInput
