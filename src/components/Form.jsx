import { useState } from "react"


export const Form=({reload})=>{
const [name,setName]=useState(null)
const [cost,setCost]=useState(null)
const [url,setUrl]=useState(null)
const [cash,setCash]=useState(false)
const [card,setCard]=useState(false)
const[rating,setRating]=useState(null)



const handlesubmit=(e)=>{
    e.preventDefault()
    
    const payload={
        "name":name,
        "rating":rating,
        "costForTwo":cost,
        "src":url,
        "paymentMethod":{
            "case":cash,
            "card":card
        },"id":Math.random()*1000
    }
    

   reload(payload) 
   setName("");
   setCost("")
    //console.log(payload)
}
    return <div>
        <form>
            <input type="text" placeholder="Restro name" onChange={(e)=>setName(e.target.value)} value={name}/>
            <input type="number" placeholder="cost" onChange={(e)=>setCost(e.target.value)} value={cost}/>
            <input type="number" placeholder="rate" onChange={(e)=>setRating(e.target.value)}/>
            <input type="url" placeholder="url" onChange={(e)=>setUrl(e.target.value)} />
               Cash <input type="checkbox" onChange={(e)=>setCash(e.target.checked)}/>
               Card <input type="checkbox" onChange={(e)=>setCard(e.target.checked)}/>
                <button type="submit" onClick={handlesubmit}>ADD</button>
        </form>

    </div>
}