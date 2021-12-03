import React from 'react'
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxIcon from '@mui/icons-material/CheckBox';


function TodoList({toshow,dell,satbar,eedit}) {
    return (
        <div>
            
            
          
      
           {toshow.map((el)=>{
               return <div key={el.id} style={{display:"flex",border:"1px solid black"}}>
                   
               <p style={{ marginLeft:"20px",color:"blue"}}>{el.title}</p>
               {/* <p >Id-{el.id}</p> */}
               <p style={{ marginLeft:"20px",color:"red"}}>Status-{el.status ? "true":"false"}</p>
              
              
              <IconButton aria-label="delete">
              <DeleteIcon style={{marginLeft:"10px"}} onClick={()=>dell(el.id)}/>
              </IconButton>
               <EditIcon style={{marginTop:"18px",marginLeft:"10px"}}onClick={()=>eedit(el.id)}/>
               <CheckBoxIcon style={{marginTop:"18px",marginLeft:"10px"}} onClick={()=>satbar(el.id,el.status)}/>
               </div>
           })} 
        </div>
    )
}

export default TodoList
