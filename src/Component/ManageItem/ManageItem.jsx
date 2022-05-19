import React, { useEffect, useState } from "react";
import TabileData from "../TabileData/TabileData";
import { FiPlusSquare } from "react-icons/fi";
import { Link, Navigate } from "react-router-dom";
import { BiErrorAlt } from "react-icons/bi";
import Loading from "../Loading/Loading";
const ManageItem = () => {

  //loading tiger
  const [loading, setLoading] = useState(true);
  
  const [manageItem, setManageItem] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allItems")
      .then((res) => res.json())
      .then((data) => {
        setManageItem(data)
        setLoading(false)
      });
  }, []);

    

  const [confirm, setConfirm] = useState(false); //open confirm mass
  const [deleteConfirm, setDeleteConfirm] = useState(false);

  const [deletePdId, setDeletePdId] = useState(null);

  const getConfirm = (id) => {
    setDeletePdId(id);
    setConfirm(true);
  };

  const deleteItem = (id) => {
    setConfirm(false);

    const url = `http://localhost:5000/item/delete/${id}`;
    fetch(url, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const reminding = manageItem.filter((product) => product._id != id);
          setManageItem(reminding);
        }
      });
  };

  return (
    <section className="relative  bg-[#e9fcff]">
      {loading && <Loading />}
      {confirm && (
        <div className="fixed top-0 right-0 w-screen h-screen bg-[#15191fe3] flex justify-center items-center z-50">
          <div className="w-[320px] p-8 bg-[#374151] text-center text-2xl text-[#ffffffd8] rounded-lg border border-[#ffffff7e]">
            <div className="flex justify-center mb-5">
              <BiErrorAlt className="text-8xl text-slate-100" />
            </div>
            <p>Are you sure you want to delete this product?</p>
            <div className="flex justify-evenly items-center mt-8">
              <button
                onClick={() => deleteItem(deletePdId)}
                className="bg-[#c51b1b] hover:bg-[#830f0f] border border-[#c51b1b] hover:border-[#830f0f] px-5 py-2 rounded-xl font-[500] text-xl"
              >
                Yes, I'm sure
              </button>
              <button
                onClick={() => setConfirm(false)}
                className=" hover:bg-[#ffffff2e] border border-cyan-50 px-5 py-2 rounded-xl font-[500] text-xl"
              >
                No, Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="sectionContainer min-h-[calc(100vh-31rem)]">
        <div className="flex justify-center">
          <h3
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#3f3f3f]
            my-3 sm:my-5 md:my-7"
          >
            Manage Items
          </h3>
        </div>

        <div className="p-2  bg-[#e9fcff] rounded-3xl">
          <div className="flex justify-between items-center mt-10 px-10">
            <h4 className="text-[1.7rem] sm:text-4xl text-[#494949] font-[500]">
              Total Product: {manageItem?.length}
            </h4>
            <Link
              to="/addItem"
              className="px-5 sm:px-8 py-2 sm:py-4 bg-[#3369ff] hover:bg-[#5482ff] ease-in-out duration-300 rounded-md text-white
              text-xl sm:text-2xl font-[500] flex items-center"
            >
              Add New <FiPlusSquare className="ml-2" />{" "}
            </Link>
          </div>

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
              <tbody className="overflow-hidden">
                {manageItem.map((item) => (
                  <TabileData
                    key={item?._id}
                    item={item}
                    getConfirm={getConfirm}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageItem;
