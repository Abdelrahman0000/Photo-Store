import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
export default function Tour({tour,tochose,chose,mysrc}) {

  const hestory=useNavigate();
  function handlerevent(){
    
    tochose(tour)
    hestory('/Auction')
  }

const handlimg=()=>{
chose(true)
mysrc(tour.img)

}


  return (
    <article className='single-tour'>
    <img src={tour.img} alt={tour.title} onClick={()=>handlimg()} />
    <footer>
        <div className='tour-info'>
            <h4>{tour.title}</h4>
            <h4 className='tour-price'>${tour.price}</h4>
        </div>
      
        <button className='delete-btn del' onClick={()=>handlerevent()} >Go to Auction</button>
       
    </footer>
</article>
  )
}
