import React,{ useEffect, useState } from "react";
import { RestaurantDetails } from "./RestaurantDetails";
import { Form } from "./Form";
import data from "../data.json";
import axios from "axios"

const RestaurantList =()=>{
    
    // const [next,setNext]=useState(1);
    const [prev,setPrev]=useState(0);
    const [show,setShow]=useState(data.resturant)
    const [details,setDetails]=useState(show.slice(prev,prev+5));
   
    const reload=(payload)=>{
        axios.post("http://localhost:2021/resturant",payload).then((res)=>{
            console.log(res)
          })
    }
    useEffect(()=>{
       // setDetails)
    },[reload])

  const handlePage=(v)=>{
      setPrev(prev+v)
      setDetails(show.slice(prev,prev+5))
      console.log(details)
  }

    const handle1star=(val)=>{

        const filtered=data.resturant.filter((fill)=>{
          return  fill.rating>val;
         
        }) 
        const sorted=filtered.sort((a,b)=>{
            return a.rating-b.rating;
        })
        //console.log(filtered)
        setDetails(sorted)
        //setDetails(filtered)
    }
   
   


    const handleCash=(money)=>{
        const method=details.filter((m)=>{
            return m.paymentMethod.case==true
        })
        console.log(money)
        setDetails(method)
    }

    const handleCard=(money)=>{
        const method=details.filter((m)=>{
            return m.paymentMethod.card==true
        })
        console.log(money)
        setDetails(method)
    }
    
    
    return <div>
           <button onClick={()=>handle1star(1)}>1 star</button>
           <button onClick={()=>handle1star(2)}>2 star</button>
           <button onClick={()=>handle1star(3)}>3 star</button>
           <button onClick={()=>handle1star(4)}>4 star</button>

           <button onClick={()=>handleCash("case")}>CASH</button>
           <button onClick={()=>handleCard("card")}>CARD</button>

           <Form reload={reload}/>

        {
             details && details.map((item,idx)=>(
             <RestaurantDetails key={item.id} data={item}/>
             ))
        }
         <button onClick={()=>handlePage(-5)} disabled={prev<=0 ? true: false}>Previous</button>
        <button onClick={()=>handlePage(+5)} disabled={show.length-5<=prev ? true: false}>Next</button>
       
    </div>
}
export {RestaurantList}