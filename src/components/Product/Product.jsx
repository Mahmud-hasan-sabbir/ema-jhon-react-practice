import React from 'react';

import './Product.css';

const Product = (props) => {

 const { name, img ,seller,stock,price} = props.product;

 return (
  <div className='product'>
     <div className='product-img'>
      <img src={img} alt="" />
     </div>
     <div>
     <h4 className='product-name'>{name}</h4>
      <br/>
     <p className='product-bio'>Seller: {seller}</p>
     <p className='product-bio'>${price}</p>
     <p className='product-bio'><small>Only {stock} left in stock - order soon</small></p>
     <br />
     <button className='main-button'>Add to Cart</button>
     </div>
    

  </div>
 );
};

export default Product;