import React from 'react';
import './Cart.css';

const Cart = (props) => {

 let cart = props.cart;
 let totalprice = cart.reduce((total, prd) => total + prd.price, 0);

 let shipping = 0;
 if (totalprice > 200) {
  shipping = 0;
 } else if (totalprice > 100) {
  shipping = 10.99;
 } else if (totalprice > 50) {
  shipping = 5.99;
 }else if(totalprice > 0){
  shipping = 20.99;
 }else{
  shipping = 0;
 }


 let tax = (totalprice / 10).toFixed(2);
 let grandTotal = (totalprice + shipping + Number(tax)).toFixed(2);

 return (
  <div className='cart'>
      <h4>Order Summary</h4>
      <h5>Items Ordered: {cart.length}</h5>
      <h6>Product Price : {totalprice}</h6>
      <h6>Shipping Charge : {shipping} </h6>
      <h6>Tax / Vat: {tax}</h6>
      <h6>Grand Total : {grandTotal}</h6>
  </div>
 );
};

export default Cart;