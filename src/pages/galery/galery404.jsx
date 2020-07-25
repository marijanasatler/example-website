import React from 'react';
import {Link} from 'react-router-dom';
import './imagegalery.scss';

const Galery404=()=>(
 
    <div className='galery404-bg'>
       <div className='galery-btn-container'>
           <Link  to='/project' > 
           <button className='galery-btn' >
              Back to project
            </button>
               </Link></div>
               <div className='container-404'>
         <h1 className='winp' >WORK IN PROGRES</h1>
         <div className='pt2 pb5'>
         <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
               </div></div>
            
    </div>
);

export default Galery404;