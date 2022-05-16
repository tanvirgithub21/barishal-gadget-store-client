import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InventorySingleItem from "../InventorySingleItem/InventorySingleItem";
import { AiOutlinePlusSquare } from "react-icons/ai";

const Inventory = () => {

const [inventoryItem, setInventoryItem] = useState([])
const [newDescription, setNewDescription] = useState([])
useEffect(() =>{
    fetch("http://localhost:5000/allItems")
    .then(res => res.json())
    .then(data => setInventoryItem(data))
},[])

/* const shortDescription = (description) =>{
    if(description.length > 40){
        setNewDescription(description.slice(0, 100 + "..."));
    }else{
        setNewDescription(description)
    }
} */

  return (
    <section>
      <div className="sectionContainer">
        <h2 className="SectionHeader">Inventory Items</h2>

        <div className="inventoryItemBox grid grid-cols-1 sm:grid-cols-2 gap-8 mx-6 sm:mx-0 my-10">
            {
                inventoryItem.map(item => <InventorySingleItem key={item._id} item={item}/>)
            }

        </div>
      </div>
    </section>
  );
};

export default Inventory;

