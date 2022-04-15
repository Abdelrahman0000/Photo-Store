



import { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Navbar(){

    return(
        <nav className="navbar navbar-expand-lg navbar-dark main-bg">
  <div className="container-fluid ">
  <Link className="navbar-brand fs-1" to='/'>Photo<span>Store</span></Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
       <div className="collapse navbar-collapse " id="navbarSupportedContent">
     <ul className="navbar-nav me-auto mb-2 mb-lg-0 my-nav">
     <li className="nav-item">
         <Link className='nav-link ' to='/' >Photos</Link>
         
       </li>
       <li className="nav-item">
       <Link className='nav-link ' to='/Profile' >Profile</Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link " aria-current="page" to='/About'>About</Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to='/Best'>best Photos in this week</Link>
       </li>
       
     
     </ul>
   </div>
 
  </div>
</nav>
    )
}
