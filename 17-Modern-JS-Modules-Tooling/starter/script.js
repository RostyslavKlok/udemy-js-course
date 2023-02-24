/*
// importing Module
// import {
//   addToCard,
//   totalPrice as price,
//   totalQuantity,
// } from "./shoppingCard.js";
// addToCard("bread", 5);

// console.log(price, totalQuantity);
// console.log(shippingCost);

// addToCard("bread", 5);
console.log("Importing module");

// import * as ShoppingCart from "./shoppingCard.js";
// ShoppingCart.addToCard("bread", 5);

// import add, {
//   addToCard,
//   totalPrice as price,
//   totalQuantity,
// } from "./shoppingCard.js";

import add, { cart } from "./shoppingCard.js";
add("pizza", 2);
add("bread", 5);
add("apples", 4);

console.log(cart);

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;
  const addToCard = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStack = function (product, quantity) {
    console.log(`${quantity} ${product} ordered to supplier`);
  };

  return {
    addToCard,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCard("apple", 4);
ShoppingCart2.addToCard("pizza", 2);

console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);

// Common JS Modules

// Export
export.addTocart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

*/

import add, { cart } from "./shoppingCard.js";
add("pizza", 2);
add("bread", 5);
add("apples", 4);

console.log(cart);

import cloneDeep from "lodash";

const state = {
  cart: [
    { product: "bread", quantity: 5 },
    { product: "pizza", quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}
