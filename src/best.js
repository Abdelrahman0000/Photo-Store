import React from 'react'

export default function Best() {
  return (
    
<main>
<h1 className='text-center'>The Best Pictures sold this week</h1>
    <article className=' pb-4 row sin'>
      <div className='col-md-9 col-12 p-0'>
    <img src='/photo/08.jpg' alt='best' className='w-100' />
    </div>
    <div className='col-md-3 bg-light col-12 align-items-center d-flex '>
    <h4 className='text-center my-4 fs-2 my-sin'>the image was sold for : 4 Million dollars</h4>
    </div>
</article>
<article className=' pb-4 row sin'>
<div className='col-md-9 col-12 p-0'>
    <img src='/photo/07.jpg' alt='best' className='w-100' />
    </div>
    <div className='col-md-3 col-12 bg-light align-items-center d-flex '>
    <h4 className='text-center my-4 fs-2 my-sin'>the image was sold for : 1 Million dollars</h4>
    </div>
</article>
</main>
  )
}
