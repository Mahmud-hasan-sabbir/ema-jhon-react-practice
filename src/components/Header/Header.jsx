import React from 'react';

import logo from '../../../public/assets/logo/logo.jpg';
import './Header.css';

const Header = () => {

     return (

       <div className='header'>
         <img src={logo} alt="" />
         <nav>
         
          <a href="/shop">Shop</a>
          <a href="/order">Order Review</a>
          <a href="/manage">Manage Inventory</a>
          <a href="/bootstrap">React Bootstap</a>
          </nav>
       </div>

     );


};

export default Header;