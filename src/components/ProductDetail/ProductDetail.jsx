import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/product';
import './ProductDetail.css';
import Product from '../Product/Product';

const ProductDetail = () => {
       const {productkey}   = useParams();
       const product = fakeData.find(pd => pd.id === productkey);
       
       
       
      return (
       <div >
          <Product showAddToCart={false} product={product}></Product>
          
       </div>
      );
};

export default ProductDetail;