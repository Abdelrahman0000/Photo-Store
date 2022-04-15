import React from 'react'
import Tours from './Tours';
export default function Main({Photos,tochose}) {
  const ispro=false;
  const tit='Gallery';
   return (
 <>
         <div className=' the-ab '>
         <main>
       <section className='row m-0  '>

<div className='col-md-6 col-12 '>
<div className='title'>
      <h2 className='mycen '> what is site do ?</h2>
      
  </div>
<p className=''>This site to buy or sell the amazing photo enjoy .</p>

  
</div>
<div className='col-md-6 col-12 d-flex align-items-center'>
    <img className='w-100 ' alt='img' src='/photo/business-team-brainstorm-idea-lightbulb-from-jigsaw-working-team-collaboration-enterprise-cooperation-colleagues-mutual-assistance-concept-pinkish-coral-bluevector-isolated-illustration_335657-1651.webp' />
</div>
</section>

</main>
</div>

<div>
       <Tours Photos={Photos}  ispro={ispro} tit={tit} tochose={tochose} />
     </div>
     </>
   );
}
