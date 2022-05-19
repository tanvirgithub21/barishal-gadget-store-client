import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InventorySingleItem from "../InventorySingleItem/InventorySingleItem";
import { AiOutlinePlusSquare } from "react-icons/ai";
import Loading from "../Loading/Loading";

const Inventory = () => {
  // auto scroll top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // auto scroll top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //loading tiger
  const [loading, setLoading] = useState(true);

  const [inventoryItem, setInventoryItem] = useState([]);
  const [newDescription, setNewDescription] = useState([]);
  useEffect(() => {
    fetch("https://barishal-gadget-store.herokuapp.com/allItems")
      .then((res) => res.json())
      .then((data) => {
        setInventoryItem(data);
        setLoading(false);
      });
  }, []);

  return (
    <section className="relative bg-[#e9fcff]">
      {loading && <Loading />}
      <div className="sectionContainer min-h-screen">
        <h2 className="SectionHeader">Inventory Items</h2>

        <div className="inventoryItemBox grid grid-cols-1 sm:grid-cols-2 gap-8 mx-6 sm:mx-0 my-10">
          {inventoryItem.map((item) => (
            <InventorySingleItem key={item._id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Inventory;
