// @flow

class ShoppingCart {
  activeCart: { [item: string]: number };

  constructor() {
    this.activeCart = {};
  }

  add(name: string, quantity: number = 1): void {
    this.activeCart[name]
      ? this.activeCart[name] += quantity
      : this.activeCart[name] = quantity;
  }

  print(): void {
    console.log('\n');
    console.log('-----------Shopping Cart------------');
    Object.keys(this.activeCart)
      .sort()
      .forEach(item => console.log(`${item}:`, this.activeCart[item]));
    console.log('------------------------------------');
    console.log('\n');
  }

}

const cart: ShoppingCart = new ShoppingCart();

cart.add('chair');
cart.add('chair');
cart.add('table');
cart.add('chair', 2);
cart.add('lamp');
cart.print();
