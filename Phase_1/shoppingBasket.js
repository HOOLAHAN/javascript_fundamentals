// file: shoppingBasket.js

class ShoppingBasket {

  constructor(){
    this.basket_array = [];
  }

  addItem = (candy) => {
    this.basket_array.push(candy)
  }

  getTotalPrice = () => {
    const temp_array =
    this.basket_array.map((candy) => {
      return candy.getPrice();
    })
  return temp_array.reduce((a, b) => {return a + b}, 0)
  }
}

module.exports = ShoppingBasket;

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