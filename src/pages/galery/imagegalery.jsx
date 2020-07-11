import React from 'react';
import {Link} from 'react-router-dom';
import './imagegalery.scss';

const ImageGalery=()=>(
    <div className=''>

    <div className='galery-btn-container'>
           <Link to='/project' > 
           <button className='galery-btn'>
              Back to project
            </button>
               </Link></div>
<div className='image-galery-container'>


            <div className='foto'>
            <img src='https://images.unsplash.com/photo-1592915890274-38bf9b95925c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=340&h=420&q=80' alt='poto' />     
            </div>
            <div className='foto'>
            <img src='https://images.unsplash.com/photo-1592832695686-5e2ba3276203?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=340&h=420&q=80' alt='poto' />      
            </div>
            
            <div className='foto'>
            <img src='https://images.unsplash.com/photo-1591079751067-c753db6d6596?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=340&h=420&q=80' alt='poto' />      
            </div>
            <div className='foto'>
            <img src='https://images.unsplash.com/photo-1592415228685-ff91e27c0730?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=340&h=420&q=80' alt='poto' />      
            </div>
          
            
            <div className='foto'>
            <img src='https://images.unsplash.com/photo-1592754775443-6dc53062e61c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=340&h=420&q=80' alt='poto' />     
            </div>
            <div className='foto'>
            <img src='https://images.unsplash.com/photo-1593016605825-8cfb409ca3b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=340&h=420&q=80' alt='poto' />     
            </div>
            

</div>
    </div>
);
 
export default ImageGalery;