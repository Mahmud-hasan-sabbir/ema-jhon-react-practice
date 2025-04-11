import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart   } from "@fortawesome/free-solid-svg-icons";
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
     <button className='main-button' onClick={() => props.addproduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart  } />Add to Cart</button>
     </div>
    

  </div>
 );
};

export default Product;