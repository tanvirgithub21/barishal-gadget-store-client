import React, { useEffect, useState } from 'react';
import { BsFillStarFill } from "react-icons/bs";

const NewSingleProduct = ({product}) => {

    const {rating, productName, price, image} = product;
    const [newProductName, setNewProductName] = useState("")

    useEffect(()=>{
        if(productName.length > 25){
            setNewProductName(productName.slice(0, 21) + "...")
        }else{
            setNewProductName(productName)
        }
    },[])

    return (
        <div className='w-full h-auto bg-[#f1f1f1] shadow-md rounded-lg overflow-hidden my-9'>
            <div className="relative image w-full h-[70px] sm:h-[130px] md:h-[200px] overflow-hidden rounded-lg mx-auto my-1">
                <img className='object-cover w-full h-full' src={image} alt="images" />
                <div className="newTag absolute top-1 sm:top-3 md:top-5 left-1 sm:left-3 md:left-5 bg-[#56cb82] text-[#fff] font-semibold rounded-3xl text-sm md:text-2xl px-2 md:px-4 py-[2px] md:py-1">New</div>
            </div>
            <div className="productInfo p-2 my-0 md:my-3 text-center text-xs sm:text-[1rem] md:text-2xl font-[500] text-[#000015c8]">
                <h4 className='cursor-pointer' title={productName}>{newProductName}</h4>
                <div className="priceAndRating text-xs sm:text-[1rem] md:text-[1.4rem] ">
                    <div className="rating flex justify-center my-1 md:my-3 text-[#f9cb00]"><BsFillStarFill className='mr-1'/><BsFillStarFill className='mr-1'/><BsFillStarFill className='mr-1'/><BsFillStarFill className='mr-1'/><BsFillStarFill className='mr-1'/></div>
                    <p className='font-semibold sm:my-2 md:my-3'><span>$</span> {price}</p>
                </div>
            </div>
        </div>
    );
};

export default NewSingleProduct;