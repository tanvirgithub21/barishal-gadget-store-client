import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Navigate, useLocation, useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const InventorySingleItem = ({item}) => {

  const [newDescription, setNewDescription] = useState("")
  const [newPdName, setPdName] = useState("")

  useEffect(() =>{
    if(item.description.length > 100){
      setNewDescription(item.description.slice(0, 100) + "...")
    }else{
      setNewDescription(item.description)
    }

    if(item.productName.length > 32){
      setPdName(item.productName.slice(0, 32) + "...")
    }else{
      setPdName(item.productName)
    }
  }, [item])

    return (
        <div className="inventoryItemBox">
            <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row max-w-auto border-gray-700 bg-gray-800 overflow-hidden ">
              <img
                className="object-cover w-full h-full rounded-t-lg md:h-auto md:w-[21rem] md:rounded-none md:rounded-l-lg "
                src={item?.imgUrl}
                alt="Inventory Item"
              />
              <div className="w-full flex flex-col justify-between p-4 leading-normal text-white font-normal text-xl">
                <h5 title={item?.productName} className="mb-2 text-2xl font-[500] tracking-tight ">{newPdName}</h5>
                <p title={item?.description} className="mb-3 text-gray-700 dark:text-gray-400">{newDescription}</p>
                <p className="mb-4">Supplier: Daraz BD</p>

                <div className="flex justify-between items-center mb-3 text-xl font-[500] text-center">
                  <h3 className="">Quantity: {item?.quantity}</h3>
                  <p>$ {item?.price}</p>
                </div>

                  <Link to={`/inventory/${item?._id}`} className="w-full bg-[#3369ff] py-1 rounded-md hover:bg-[#1e5aff] text-center transition duration-150 ease-in-out">Update</Link>

              </div>
            </div>
        </div>
    );
};

export default InventorySingleItem;