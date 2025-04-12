import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart   } from "@fortawesome/free-solid-svg-icons";
import './Product.css';
import { Link } from "react-router";


const Product = (props) => {


 const { name, img ,seller,stock,price,id} = props.product;

 return (
  <div className='product'>
     <div className='product-img'>
      <img src={img} alt="" />
     </div>
     <div>
     <h4 className='product-name'><Link to={"/product/" + id}>{name}</Link></h4>
      <br/>
     <p className='product-bio'>Seller: {seller}</p>
     <p className='product-bio'>${price}</p>
     <p className='product-bio'><small>Only {stock} left in stock - order soon</small></p>
     <br />
         { props.showAddToCart && <button className='main-button' onClick={() => props.addproduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart  } />Add to Cart</button>}
     </div>
    

  </div>
 );
};

export default Product;