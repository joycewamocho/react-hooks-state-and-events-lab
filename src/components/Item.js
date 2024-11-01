import React from "react";
import { useState } from "react";



function Item({ name, category }) {
  const[isAdded,setAdd]=useState(false);
  
  function handleClick(){
   setAdd((isAdded)=>!isAdded)
  }
  return (
    <li className={isAdded? "in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick}className="add">{isAdded? "Remove from cart":"Add to Cart"}</button>
    </li> 
  );
}

export default Item;
