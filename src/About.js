import React from 'react'
import {FaUserAlt,FaWindowRestore} from'react-icons/fa';
import { useNavigate } from 'react-router-dom';



export default function About() {

const hestory=useNavigate();
const handlerhest=(e)=>{
    e.preventDefault() 
  
    hestory('/')

}


  return (
      <>
          <div className=' the-ab'>
              <main>
<section className='row m-0 '>

<div className='col-md-6 col-12 '>
<div className='title'>
      <h2 className='mycen'>About us</h2>
      
  </div>
<p>This site to buy or sell the amazing photo join us and start now </p>
<button className='my-btn' onClick={(e)=>handlerhest(e)}>Start</button>

  
</div>
<div className='col-md-6 col-12 d-flex align-items-center'>
    <img className='w-100 ' alt='img' src='/photo/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.webp' />
</div>
</section>

</main>

</div>



<main>

    <article className=' my-sec3'>
<h2>The best Buyer</h2>

<img src='https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg' alt='person' />

<h4>Larry Little</h4>
<h4>He Cashing:80000$</h4>
<h4>He Buy:400 Photo</h4>
<h4>the average spend is : 200$ for each Photo</h4>

    </article>
<article className='about'>
    <h3 className='text-center text-dark my-5'>more information</h3>
<div className='d-flex justify-content-around row'>
<div className='col-12 col-md-5  p-4 bord'>
<FaUserAlt className='col-12 my-icon' />
<h2 className='col-12'> 1,233,698 user</h2>
</div>

<div className='col-12 col-md-5 text-center  p-4 bord'>
<FaWindowRestore className='col-12 my-icon' />
<h2 className='col-12'> 100,325,333 Photos</h2>
</div>
</div>

</article>

    </main>
    </>
  )
}
