import React from 'react';
import TabileData from '../TabileData/TabileData';

const MyItem = () => {
    return (
        <div className='sectionContainer min-h-[calc(100vh-27rem)]'>
            <div className='flex justify-center'><h3 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-[#3f3f3f]
            my-3 sm:my-5 md:my-7'>My Items</h3></div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-9">
            <table className="w-full text-sm sm:text-base md:text-xl text-left text-gray-500 dark:text-gray-400">
              <thead className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-6 py-3">Image</th>
                  <th className="px-6 py-3">Product name</th>
                  <th className="px-6 py-3">Product ID</th>
                  <th className="px-6 py-3">Supplier</th>
                  <th className="px-6 py-3">Quantity</th>
                  <th className="px-6 py-3">Price</th>
                  <th className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {/* Input table data component */}
                <TabileData />
              </tbody>
            </table>
          </div>
        </div>
    );
};

export default MyItem;