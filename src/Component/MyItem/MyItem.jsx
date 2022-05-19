import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import TabileData from "../TabileData/TabileData";
import { BiErrorAlt } from "react-icons/bi";
import Loading from "../Loading/Loading";

const MyItem = () => {

    //loading tiger
    const [loading, setLoading] = useState(true);
    

  const [myItem, setMyItem] = useState([]);
  const [logInUser] = useAuthState(auth);
  const url = `https://barishal-gadget-store.herokuapp.com/allItems?email=${logInUser?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyItem(data)
        setLoading(false)
      });
  }, [logInUser]);

  // ================================================================================

  const [confirm, setConfirm] = useState(false); //open confirm mass
  const [deleteConfirm, setDeleteConfirm] = useState(false);

  const [deletePdId, setDeletePdId] = useState(null);

  const getConfirm = (id) => {
    setDeletePdId(id);
    setConfirm(true);
  };

  const deleteItem = (id) => {
    setConfirm(false);

    const url = `https://barishal-gadget-store.herokuapp.com/item/delete/${id}`;
    fetch(url, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const reminding = myItem.filter((product) => product._id != id);
          setMyItem(reminding);
        }
      });
  };

  //=================================================================================
  return (
    <div className="relative  bg-[#e9fcff]">
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
      <div className="sectionContainer min-h-[calc(100vh-27rem)]">
        <div className="flex justify-center">
          <h3
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#3f3f3f]
            my-3 sm:my-5 md:my-7"
          >
            My Items
          </h3>
        </div>
        <div className="flex justify-center">
          <h3
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#535353]
            my-3 sm:my-5 md:my-7"
          >
            Total Items: {myItem?.length}
          </h3>
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
            <tbody className="">
              {/* Input table data component */}
              {myItem.map((item) => (
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
  );
};

export default MyItem;
