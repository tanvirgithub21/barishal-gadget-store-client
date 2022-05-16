import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Navigate, useLocation, useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const UpdateItem = () => {

  const {_id} = useParams()

  console.log(_id);

    const [updateItem, setUpdateItem] = useState({})


    useEffect(() =>{
        fetch(`http://localhost:5000/item/${_id}`)
        .then(res => res.json())
        .then(data => setUpdateItem(data))
    },[])

    console.log(updateItem, "update Item");

    const addQuantity = event =>{
      event.preventDefault()
      console.log(event.target.quantity.value);
      event.target.reset()
    }

    const [newDescription, setNewDescription] = useState("")
    const [newPdName, setPdName] = useState("")
  
    useEffect(() =>{
      if(updateItem?.description?.length > 100){
        setNewDescription(updateItem?.description.slice(0, 98) + "...")
      }else{
        setNewDescription(updateItem?.description)
      }
  
      if(updateItem?.productName?.length > 32){
        setPdName(updateItem?.productName.slice(0, 20) + "...")
      }else{
        setPdName(updateItem?.productName)
      }
    }, [updateItem])

    return (
          <div className='overflow-hidden'>
            <div className="SectionHeader">Update Item</div>

            <div className="inventoryItemBox max-w-[65rem] mx-6 sm:mx-auto py-7 sm:py-16 md:py-[10rem]">
              <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row max-w-auto border-gray-700 bg-gray-800 overflow-hidden ">
                <img
                  className="object-cover w-full h-full rounded-t-lg md:h-auto md:w-[21rem] md:rounded-none md:rounded-l-lg "
                  src={updateItem?.imgUrl}
                  alt="Inventory Item"
                />
                <div className="w-full flex flex-col justify-between p-4 leading-normal text-white font-normal text-xl">
                  <h5 className='mb-2 text-2xl font-[500] tracking-tight'>Product ID : {updateItem?._id}</h5>
                  <h3 className="mb-2 text-2xl font-[500] tracking-tight ">{newPdName}</h3>
                  <p className="mb-3 text-gray-700 dark:text-gray-400">{newDescription}</p>
                  <p className="mb-4">Supplier: Daraz BD</p>

                  <div className="flex justify-between items-center mb-3 text-xl font-[500] text-center">
                    <h3 className="">Quantity: {updateItem?.quantity}</h3>
                    <p>$ {updateItem?.price}</p>
                  </div>

                    <div className='w-full flex justify-between'>

                      <button className="bg-[#3369ff] py-1 rounded-md hover:bg-[#1e5aff] transition duration-150 ease-in-out px-5 py-2 font-[500] w-[47%]">Deliver</button>

                      <div className=" w-[47%]">
                        <form onSubmit={addQuantity} className="flex justify-between" >
                          <input type="number" name="quantity" placeholder='Quantity' className='w-[55%] py-2 rounded-lg text-[#787878] pl-4 font-[500] text-xl sm:text-2xl' />
                          <input type="submit" value="Add" className='w-[40%] bg-[#3369ff] rounded-md hover:bg-[#1e5aff] transition duration-150 ease-in-out px-3 py-2 font-[500]' />
                        </form>
                      </div>

                    </div>

                </div>
              </div>
            </div>

            <div className="flex justify-center mb-10">
              <Link to="/manageItem" className='text-center text-white text-2xl font-[500] px-6 py-3 rounded-md bg-[#3369ff] hover:bg-[#1e5aff] transition duration-150 ease-in-out'>Manage All Inventory</Link>
            </div>
          </div>
    );
};

export default UpdateItem;