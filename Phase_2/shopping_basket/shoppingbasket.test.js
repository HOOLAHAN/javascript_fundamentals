// file: ShoppingBasket.test.js

const ShoppingBasket = require("./shoppingbasket");

describe('ShoppingBasket', () => {
  it('adds an item to the basket and returns the total value', () => {
    let basket = new ShoppingBasket();
    let candyDouble = { getName: () => 'Mars', getPrice: () => 4.99 };
    basket.addItem(candyDouble);
    expect(basket.getTotalPrice()).toEqual(4.99)
  })

  it('returns an empty basket if nothing has been added', () => {
    let basket = new ShoppingBasket();
    expect(basket.getTotalPrice()).toEqual(0)
  })

  it('adds serveral items to the basket and returns the total value', () => {
    let basket = new ShoppingBasket();
    let candyDouble1 = { getName: () => 'Mars', getPrice: () => 4.99 };
    let candyDouble2 = { getName: () => 'Snickers', getPrice: () => 4.01 };
    let candyDouble3 = { getName: () => 'Skittles', getPrice: () => 3.99 };
    basket.addItem(candyDouble1);
    basket.addItem(candyDouble2);
    basket.addItem(candyDouble3);
    expect(basket.getTotalPrice()).toEqual(12.99)
  })
});
