import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InventorySingleItem from "../InventorySingleItem/InventorySingleItem";
import { AiOutlinePlusSquare } from "react-icons/ai";

const Inventory = () => {

const [inventoryItem, setInventoryItem] = useState([])
const [newDescription, setNewDescription] = useState([])
useEffect(() =>{
    fetch("https://raw.githubusercontent.com/tanvirgithub21/assainment-11-data/main/inventory.json")
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

        <div className="inventoryItemBox grid grid-cols-2 gap-8 my-10">
            {
                inventoryItem.map(item => <InventorySingleItem key={item._id} item={item}/>)
            }

            <div className="addItem flex justify-center items-center bg-white rounded-lg border shadow-md border-gray-700 cursor-pointer">
                <div className="addIcon w-52 h-52 overflow-hidden text-[20rem] text-[#80808064] flex justify-center items-center">
                    <AiOutlinePlusSquare/>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Inventory;

