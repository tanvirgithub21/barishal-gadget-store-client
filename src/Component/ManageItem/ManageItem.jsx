import React from "react";
import TabileData from "../TabileData/TabileData";
import { FiPlusSquare } from "react-icons/fi";
import { Link, Navigate } from "react-router-dom";

const ManageItem = () => {


  return (
    <section>
        <div className="sectionContainer min-h-[calc(100vh-31rem)]">

        <div className="flex justify-end mt-10" >
            <Link to="/addItem"  className="px-8 py-4 bg-[#3369ff] rounded-md text-white text-2xl font-[500] flex items-center">Add New <FiPlusSquare className="ml-2"/> </Link>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-9">

            <table className="w-full text-sm sm:text-base md:text-xl text-left text-gray-500 dark:text-gray-400">
                <thead className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th className="px-6 py-3">
                            Image
                        </th>
                        <th className="px-6 py-3">
                        Product name
                        </th>
                        <th className="px-6 py-3">
                        Product ID
                        </th>
                        <th className="px-6 py-3">
                        Supplier
                        </th>
                        <th className="px-6 py-3">
                        Quantity
                        </th>
                        <th className="px-6 py-3">
                        Price
                        </th>
                        <th className="px-6 py-3">
                        <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody className="">
                    {/* Input table data component */}
                    <TabileData/>
                </tbody>
            </table>
        </div>

        </div>
    </section>
  );
};

export default ManageItem;
