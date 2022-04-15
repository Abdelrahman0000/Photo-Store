import React, { useEffect, useState } from 'react'
import dat from './authperson';


const auct=[];
export const allaucttp=[]

export default function Auction({tour,user}) {
  const [actup,setactup]=useState({})
  const [isact,setisact]=useState(false);
  const [value,setValue]=useState(0);
  const [age,setage]=useState(0);
  const [desc,setdesc]=useState('');


const [data,setdata]=useState(dat)
  useEffect(()=>{
if(auct.length===0){
  auct.push(tour)
  return;
}
let m=0;

auct.map((item)=>
{  
  if(item.id===tour.id){
   m=m+1;
  }


}

)
if(allaucttp){
allaucttp.map((item)=>
{  
  if(item.id===tour.id){
    setisact(true)
    setactup(tour)
  }

  
}

)
}
if(m===0){
auct.push(tour);
return;
}

  },[tour])

  
  function handlerevent(e){
    e.preventDefault() ;
      
    allaucttp.push({'id': tour.id,'name':user,value,tour})
    console.log('all',allaucttp,isact)
    setactup({'id': tour.id,'name':user,value,age,desc})
setisact(true)

  }






   return (
     <main>
       <h4 className='tour-price fs-1 text-dark yr text-center'>the action start with : {tour.price} $</h4>
<div className='row m-0 my-4'> 
<article className='single-tour act col-md-6 col-12'>

    <img src={tour.img} alt={tour.title} />
   
</article>
<div className=' col-md-6 col-12 aline-items-center d-flex text-center'>
{!isact&&
     <form className='myform col-12 m-auto'>
       <label className='mb-5 payy'>pay form</label>
       <label className='text-start'>what will you pay?</label>
       <input placeholder='$ 0' type='number' className='inp-num m-4' value={value} onChange={(e)=>setValue(e.target.value)} />
       <label className='text-start'>what is your age</label>
       <input placeholder='age' type='number' className='inp-num m-4' value={age} onChange={(e)=>setage(e.target.value)} />
       <label className='text-start'>why do you want to buy this?</label>
     <textarea className='inp-text m-4 ' value={desc} onChange={(e)=>setdesc(e.target.value)}></textarea>
 <div className='but'>
       <button onClick={(e)=>handlerevent(e)}>do Action</button>
       </div>
     </form>
}

{isact&&
<div className='myform justify-content-center'>
     <h3 className=''>you are in the auction</h3>
     </div>
}
</div>
</div>


<div className='row m-0 my-4'>

<div className=' col-lg-6 col-12 col-xl-4 ruls '>
<h3 className='fs-3'>here you can participate in the action </h3>

<h3 className='fs-4 act'>Action rules: </h3>
<ul>
<li>you are not allwo to communicate with the seller on social media or on any other website or appliction</li>
<li>the person with the largest bid wins the photo</li>
<li>the seller has the right to stop the auction if he finds that the offers are not suitable for him</li>

</ul>
</div>


  <div className=' col-lg-6 col-xl-8 col-12'>
  <h3 className='text-center'>The Action</h3>
    <div className='the-grid'>
     {isact&&<>
    
<article key={actup.id} className='person mt-5'>
<img src="/download.jpg" alt={actup.name} />
<div>
    <h4>{actup.name}</h4>
 
</div>
{actup.age&&  <p>{actup.age} years</p>}
{actup.desc&&  <p className='text-dark fs-4'>{actup.desc} </p>}
<h4 className='mt-3'>Will pay: {actup.value}$</h4>
</article>
</>
     }

 {data.map((person)=>{
   const{id,name,age,image}=person;
 
 return(
 <article key={id} className='person'>
  <img src={image} alt={name} />
   <div>
       <h4>{name}</h4>
    {age&&  <p>{age} years</p>}
     <p className='text-dark fs-4'>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores excepturi harum iste amet accusamus pariatur impedit eaque vitae in doloremque placeat sunt provident, culpa rem similique. Saepe voluptate eius consequatur. </p>
   </div>
   <h4 className='mt-3'>Will pay: {person.value}$</h4>
 </article>
 )
 })}

    </div>
    </div>
    </div>
  
    
     </main>
   );
}

// {data.map((person)=>{
//   const{id,name,age,image,desc}=person;
// return(
// <article key={id} className='person'>
//   <img src={image} alt={name} />
//   <div>
//       <h4>{name}</h4>
//    {age&&  <p>{age} years</p>}
   
//   </div>
//   <h4 className='mt-3'>Will pay: {person.value}$</h4>
// </article>
// )
// })}

