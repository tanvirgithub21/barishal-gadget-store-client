import React, { useEffect, useState } from 'react';
import Rating from '../Rating/Rating';

const NewSingleProduct = ({product}) => {

    console.log(product);

    const {rating, productName, price, imgUrl} = product;
    const [newProductName, setNewProductName] = useState("")
    useEffect(()=>{
        if(productName.length > 25){
            setNewProductName(productName.slice(0, 21) + "...")
        }else{
            setNewProductName(productName)
        }
    },[])

    return (
        <div className="trendingPd w-auto shadow-xl p-1 sm:p-4 bg-[#f3f3f3] rounded-xl overflow-hidden ">
        <div className="imgBox rounded-xl overflow-hidden mb-5">
            <img src={imgUrl} alt="Images" />
        </div>        <div className="trendingPdInfo text-[1rem] sm:text-xl md:text-2xl font-[500] text-center">
            <h3 title={productName} className='cursor-pointer'>{newProductName}</h3>
            <div className='flex justify-center items-center my-2 text-[#f1c100]'>
                <Rating rating={rating}/>
            </div>
            <p>$ <span>{price}</span></p>
        </div>
    </div>
    );
};

export default NewSingleProduct;