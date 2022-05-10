import React, { useState } from "react";

const AddItem = () => {
    
    const [todayDate, settodayDate] = useState(new Date());//this year month date
    const [thisYear, setThisYear] = useState(new Date().toISOString().slice(0, 4));//this year
    const [thisMonth, setThisMonth] = useState(new Date().toISOString().slice(5, 7));//this month
    const [thisDate, setThisDate] = useState(new Date().toISOString().slice(8, 10));//this date

    const handelBackButton = () =>{
      window.history.back();  
  }

  return (
    <section>
      <div className="sectionContainer">

        <form className="bg-[#1f2937] p-10 my-12 rounded-2xl">

            <div className="title flex justify-center text-4xl text-gray-300 mb-12">
                <p>Add Item</p>
            </div>
            
          <div className="grid gap-6 mb-6 lg:grid-cols-2">
            <div>
              <label
                className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
              >
                Product Name
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Product Name"
                required=""
              />
            </div>
            <div>
              <label
                className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
              >
                Supplier Name
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Supplier Name"
                required=""
              />
            </div>
            <div>
              <label
                className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
              >
                Quantity
              </label>
              <input
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter product Quantity"
                required=""
              />
            </div>
            <div>
              <label
                className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
              >
                Price
              </label>
              <input
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter product Price"
                required=""
              />
            </div>

            <div>
              <label
                className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
              >
                Manage user Email
              </label>
              <input
                type="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your Email"
                required=""
              />
            </div>

            <div>
              <label
                className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
              >
                Rating
              </label>
              <input
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="5 or 4.5 or 4 or 3.5 or 3"
                required=""
              />
            </div>

          <div>
            <label
              className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
            >
              Category
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="product Category"
              required=""
            />
          </div>

          <div>
            <label
              className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
            >
              Date
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={("0" + todayDate.getDate()).slice(-2) +"-" + ("0" + (todayDate.getMonth() + 1)).slice(-2) +"-" + todayDate.getFullYear()}
              readOnly
            />
          </div>
          </div>{/* grid gap this aria */}


          <div className="mb-6">
            <label
              className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
            >
              Image
            </label>
            <input
              type="url"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="product image url"
              required=""
            />
          </div>
          

          <div className="mb-6">
            <label
              className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
            >
              Description
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="product Description"
              required=""
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
