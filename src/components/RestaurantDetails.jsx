import React from "react";
import styles from "./app.module.css"
const RestaurantDetails=({data})=>{
    //console.log(data)
    const {
        name,
        cuisine,
        minOrder,
        rating,
        src,
        paymentMethod,
        costForTwo
    }=data;
    // const {case , card}=paymentMethod
    return <div style={{border:"1px solid grey",margin:'10px', width:"400px"}}>

        <img className={styles.image} src={src}/>
        <p>{name}</p>
        <p >Rating -{rating}</p>
        <p>Payment-Method-{paymentMethod.case && "CASH"} {paymentMethod.card && "CARD"}</p>
       <p>Cost for two-{costForTwo}</p>
       
       </div>
};
export {RestaurantDetails}