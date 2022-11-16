// file: shoppingbasket.js

class ShoppingBasket {

  constructor(){
    this.basket_array = [];
    this.discount = 0;
  }

  addItem = (candy) => {
    this.basket_array.push(candy)
  }

  applyDiscount(discount) {
    this.discount = discount;
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.basket_array.forEach((candy) => {
      totalPrice += candy.getPrice();
    });

    return totalPrice - this.discount;
  }
  
}

module.exports = ShoppingBasket;


// getTotalPrice = () => {
//   const temp_array =
//   this.basket_array.map((candy) => {
//     return candy.getPrice();
//   })
// return temp_array.reduce((a, b) => {return a + b}, 0)
// }

// ====================================================

// node
// const Candy = require('./candy');
// const ShoppingBasket = require('./shoppingBasket');
// const candy = new Candy('Mars', 4.99);
// const basket = new ShoppingBasket();
// basket.getTotalPrice();

// basket.addItem(candy);
// basket.addItem(new Candy('Skittle', 3.99));
// basket.addItem(new Candy('Skittle', 3.99));

// basket.getTotalPrice();