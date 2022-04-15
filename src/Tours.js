
import React, {  useEffect, useState } from "react";
// Import Swiper React components

// import required modules

import Tour from './Tour';
export default function Tours({Photos,tochose,ispro,tit }) {
 const[ischose,setischose]=useState(false);
const[mysrc,setmysrc]=useState('')
          

  return (   <div className='m-2'>
    <div className='title'>
        <h2 className='mycen'>{tit}</h2>
        <div className='underline'></div>
    </div>
    <div>
      {
        ischose&&<div className='myoverflow' onClick={()=>setischose(false)}>
          <img src={mysrc} alt='photon' />
        </div>
}
<div className='mygrid'>
{ispro&&
        Photos.map((item)=>{
         console.log(item)
return  <Tour key={item.id} tour={item.tour} tochose={tochose} chose={setischose} mysrc={setmysrc}  /> 
        })
        }
 {!ispro&&
        Photos.map((item)=>{
         console.log(item)
return  <Tour key={item.id} tour={item} tochose={tochose} chose={setischose} mysrc={setmysrc}  /> 
        })
        }
        </div>
</div>
</div>
  )
}
