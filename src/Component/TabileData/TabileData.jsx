import React, { useEffect, useState } from "react";

const TabileData = ({ item, getConfirm }) => {
  const [newPdName, setPdName] = useState("");

  useEffect(() => {
    if (item?.productName?.length > 32) {
      setPdName(item?.productName.slice(0, 20) + "...");
    } else {
      setPdName(item?.productName);
    }
  }, [item]);

  return (
    <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
      <td className="px-6 py-4">
        <img src={item?.imgUrl} alt="img" className="w-10 h-10 rounded" />
      </td>
      <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
        {newPdName}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        {item?._id}
      </td>
      <td className="px-6 py-4">{item?.supplier}</td>
      <td className="px-8 py-4 font-medium text-gray-900 dark:text-white">
      {item?.quantity}
      </td>
      <td className="px-6 py-4">&#36; {item?.price}</td>  
      <td className="px-6 py-4 text-right">
        <button onClick={() => getConfirm(item?._id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TabileData;
