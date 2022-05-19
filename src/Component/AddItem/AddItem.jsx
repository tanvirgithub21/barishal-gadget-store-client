import { async } from "@firebase/util";
import { React, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddItem = () => {
  const [user] = useAuthState(auth);

  const [todayDate, settodayDate] = useState(new Date()); //this year month date
  const date =
    ("0" + todayDate.getDate()).slice(-2) +
    "-" +
    ("0" + (todayDate.getMonth() + 1)).slice(-2) +
    "-" +
    todayDate.getFullYear();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.email = user?.email;

    // Simple POST request with a JSON body using fetch
    fetch("http://localhost:5000/addItem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `${localStorage.getItem("jwtSecretKey")}`,
        email: `${user?.email}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) =>
        data?.acknowledged
          ? toast.success("Add Item successful")
          : toast.error("Somethin Wrong")
      );

    reset();
  };

  return (
    <section className=" bg-[#e9fcff]">
      <div className="sectionContainer relative">
        {/* back button  */}
        <div className="backBtn flex justify-start text-slate-100 sm:absolute sm:top-6 sm:left-5 mt-4 ml-4 sm:mt-0 sm:ml-0">
          <button
            onClick={() => window.history.back()}
            className="flex items-center text-xl font-semibold bg-sky-600 pr-5 rounded-lg cursor-pointer py-2"
          >
            <MdKeyboardArrowLeft className="text-4xl" /> BACK
          </button>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[#1f2937] p-10 my-12 rounded-2xl"
        >
          <div className="title flex justify-center text-4xl text-gray-300 mb-12">
            <p>Add Item</p>
          </div>

          <div className="grid gap-6 mb-6 lg:grid-cols-2">
            <div>
              <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">
                Product Name
              </label>
              <input
                {...register("productName")}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Product Name"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">
                Supplier Name
              </label>
              <input
                {...register("supplier")}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Supplier Name"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">
                Quantity
              </label>
              <input
                {...register("quantity")}
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter product Quantity"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">
                Price
              </label>
              <input
                {...register("price")}
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter product Price"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">
                Image
              </label>
              <input
                {...register("imgUrl")}
                type="url"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="product image url"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">
                Rating
              </label>
              <input
                {...register("rating")}
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="5 or 4.5 or 4 or 3.5 or 3"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">
                Category
              </label>
              <input
                {...register("category")}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="product Category"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">
                Date
              </label>
              <input
                {...register("date")}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                defaultValue={date}
                readOnly
              />
            </div>
          </div>
          {/* grid gap this aria */}

          <div className="mb-6">
            <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">
              Description
            </label>
            <textarea
              {...register("description")}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 min-h-[12rem] sm:min-h-[10rem]"
              placeholder="product Description"
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Item
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddItem;
