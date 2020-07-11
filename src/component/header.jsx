import React from 'react';
import  {Link } from 'react-router-dom';
import './header.scss';

const Header =()=>(
<div class="navbar">
<Link className='aa' to='/'  ><img className='logo-img' src={require('../images/bg7.png')} alt='logo'/></Link>
  <div class="dropdown">
    <button class="dropbtn"><img alt='logo' src={require('../images/menubar.png')}/>
    </button>
    <div class="dropdown-content">
    <Link className='aa' to='/'  >HOME</Link>
    <Link className='aa' to='/project'  >PROJECT</Link>
    <Link className='aa' to='/contact'  >CONTACT</Link>
     </div>
  </div> 
</div>
);
export default Header;

               