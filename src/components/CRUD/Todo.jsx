import React,{useEffect, useState} from 'react'
import TodoInput from './TodoInput'
import axios from 'axios'
import TodoList from './TodoList';
function Todo() {
 const[toshow,setToshow]=useState([]); //because we want it in a form of array.
 const[inpu,setInpu]=useState("")
 const[eedit,setEedit]=useState(false)
 const[elid,setElid]=useState(null)

useEffect(()=>{
    toset()
},[])




const toget=(payload)=>{
  axios.post("http://localhost:2002/posts",payload).then((x)=>{
      console.log(x)
      toset()
  })
}

const toset=()=>{
    axios.get("http://localhost:2002/posts").then((x)=>{
        setToshow(x.data.reverse())    
   // console.log(x)
    })
  }

  const handledelete=(id)=>{
      axios.delete(`http://localhost:2002/posts/${id}`).then((x)=>{
       toset();
      });
  }

  const handlestatus=(id,status)=>{
    axios.patch(`http://localhost:2002/posts/${id}`,{status:!status})
    .then((x)=>{
        toset();
       });   
  }

  const toedit=(id)=>{
      setEedit(!eedit)
      setElid(id)
  }

  const handleSubmit=()=>{
    axios.patch(`http://localhost:2002/posts/${elid}`,{title:inpu})
    .then((x)=>{
        setEedit(!eedit)
        toset();
       });     
  }

 return (
        <div>
           <h1 > TODO:</h1>
          <TodoInput toget={toget}/> 
          <TodoList toshow={toshow} dell={handledelete} satbar={handlestatus} eedit={toedit}/>
        
        {eedit&&<div>
            
            <input type="text" onChange={(e)=>setInpu(e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>
            </div>}
            </div>
        
    )
}

export default Todo
