// use local storage to manage cart data
const addToDb = (id) => {
 let shoppingCart = getShoppingCart();
 
 // add quantity
 if (shoppingCart[id]) {
   shoppingCart[id] += 1;
 } else {
   shoppingCart[id] = 1;
 }
 
 localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const removeFromDb = (id) => {
 const shoppingCart = getShoppingCart();
 if (id in shoppingCart) {
   delete shoppingCart[id];
   localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
 }
}

const getShoppingCart = () => {
 const storedCart = localStorage.getItem('shopping-cart');
 return storedCart ? JSON.parse(storedCart) : {};
}

const deleteShoppingCart = () => {
 localStorage.removeItem('shopping-cart');
}

export { addToDb, removeFromDb, getShoppingCart, deleteShoppingCart };