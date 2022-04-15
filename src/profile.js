import React, { useEffect } from 'react'
import {allaucttp} from './Auction'
import Tours from './Tours';
const collectTour=[]

export default function Profile({user, tochose}) {

const info =allaucttp;

const ispro=true;
const tit='your action'
console.log(collectTour)
  return (
      <div className='profile'>
   
   <article className='person mt-5'>
<img src="/download.jpg" alt='prof' />
<div className='m-3'>
    <h4>{user}</h4>
    <p className='text-dark fs-4'><span> About You </span>:  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores excepturi harum iste amet accusamus pariatur impedit eaque vitae in doloremque placeat sunt provident, culpa rem similique. Saepe voluptate eius consequatur. </p>


</div>

</article>

<h2 className='text-dark text-center w-100 mb-5'>you didn`t buy any photo yet</h2>


<Tours Photos={info} ispro={ispro} tit={tit}   tochose={tochose} />

      </div>
  )
}
