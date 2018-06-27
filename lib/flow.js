class ShoppingCart {

  constructor() {
    this.activeCart = {};
  }

  add(name, quantity = 1) {
    this.activeCart[name] ? this.activeCart[name] += quantity : this.activeCart[name] = quantity;
  }

  print() {
    console.log('\n');
    console.log('-----------Shopping Cart------------');
    Object.keys(this.activeCart).sort().forEach(item => console.log(`${item}:`, this.activeCart[item]));
    console.log('------------------------------------', '\n');
  }

}

const cart = new ShoppingCart();

cart.add('chair');
cart.add('chair');
cart.add('table');
cart.add('chair', 2);
cart.add('lamp');
cart.print();