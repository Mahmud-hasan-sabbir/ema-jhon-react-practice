import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData/product';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb } from '../../utilities/fakedb';

const Shop = () => {

  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);

  const [cart, setCart] = useState([]);

  const handleAddProduct = (product) => {
    // Update local state
    const newCart = [...cart, product];
    setCart(newCart);
    
    // Update localStorage
    addToDb(product.id);
    
    // If you need to track quantity based on local state
    const sameProductCount = newCart.filter(pd => pd.id === product.id).length;
    console.log(`Product ${product.id} count: ${sameProductCount}`);
  };

 
  return (
    <div className='shop-container'>
     <div className="product-container">
     
      {
        products.map(pd => <Product showAddToCart={true} product={pd} addproduct = {handleAddProduct}></Product>)
      }
     
     </div>
     <div className="cart-container">
       <Cart cart={cart}></Cart>
     </div>
      
      
      
    </div>
  );
};

export default Shop;





