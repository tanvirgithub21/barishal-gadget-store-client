import React from 'react';
const url = "https://static-01.daraz.com.bd/p/0c94ea5340a19a5dda928e241d62f03a.jpg_400x400q75-product.jpg"


const TabileData = () => {
    return (
        <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
            <td className="px-6 py-4"><img src={url} alt="Product images" className="w-10 h-10 rounded" /></td>
            <td
            className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
            Apple MacBook Pro 17"
            </td>
            <td className="px-6 py-4 whitespace-nowrap">654654546545645</td>
            <td className="px-6 py-4">Sliver</td>
            <td className="px-8 py-4 font-medium text-gray-900 dark:text-white">50</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4 text-right"><button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</button></td>
        </tr>
    );
};

export default TabileData;