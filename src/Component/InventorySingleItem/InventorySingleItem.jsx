import React from 'react';

const InventorySingleItem = ({item}) => {
    return (
        <div key={item?._id} className="inventoryItemBox">
            <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row max-w-auto border-gray-700 bg-gray-800 ">
              <img
                className="object-cover w-full h-full rounded-t-lg md:h-auto md:w-[21rem] md:rounded-none md:rounded-l-lg"
                src={item?.image}
                alt="Inventory Item"
              />
              <div className="flex flex-col justify-between p-4 leading-normal text-white font-normal text-xl">
                <h5 className="mb-2 text-2xl font-[500] tracking-tight ">{item?.name}</h5>
                <p className="mb-3 text-gray-700 dark:text-gray-400">{item?.description}</p>
                <p className="mb-4">Supplier: Daraz BD</p>

                <div className="flex justify-between items-center mb-3 text-xl font-[500] text-center">
                  <h3 className="">Quantity: {item?.quantity}</h3>
                  <p>$ {item?.price}</p>
                </div>

                  <button className="bg-[#3369ff] py-1 rounded-md hover:bg-[#1e5aff] transition duration-150 ease-in-out">Update</button>

              </div>
            </div>
        </div>
    );
};

export default InventorySingleItem;