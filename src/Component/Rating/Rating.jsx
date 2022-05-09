import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

const colorAndSize = { color: "#f1c100", display: "flex", marginRight: "6px" }

const Rating = ({ rating }) => {

  if(rating == .5){
    return(
      <div style={colorAndSize}>
        <BsStarHalf /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar />
      </div>
    )
  }

  else if(rating == 0.5){
    return(
      <div style={colorAndSize}>
        <BsStarHalf /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar />
      </div>
    )
  }
  
  else if(rating == 1){
    return(
      <div style={colorAndSize}>
        <AiFillStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar />
      </div>
    )
  }
  else if(rating == 1.5){
    return(
      <div style={colorAndSize}>
        <AiFillStar /><BsStarHalf /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar />
      </div>
    )
  }
  else if(rating == 2){
    return(
      <div style={colorAndSize}>
        <AiFillStar /><AiFillStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar />
      </div>
    )
  }
  else if(rating == 2.5){
    return(
      <div style={colorAndSize}>
        <AiFillStar /><AiFillStar /><BsStarHalf /><AiOutlineStar /><AiOutlineStar />
      </div>
    )
  }
  else if(rating == 3){
    return(
      <div style={colorAndSize}>
        <AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /><AiOutlineStar />
      </div>
    )
  }
  else if(rating == 3.5){
    return(
      <div style={colorAndSize}>
        <AiFillStar /><AiFillStar /><AiFillStar /><BsStarHalf /><AiOutlineStar />
      </div>
    )
  }
  else if(rating == 4){
    return(
      <div style={colorAndSize}>
        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar />
      </div>
    )
  }
  else if(rating == 4.5){
    return(
      <div style={colorAndSize}>
        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><BsStarHalf />
      </div>
    )
  }
  else{
    return(
      <div style={colorAndSize}>
        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
      </div>
    );
  }
};

export default Rating;