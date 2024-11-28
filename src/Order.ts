class Order {
  private customer: Customer;

  constructor() {
    this.customer = new Customer();
  }

  getTotalPrice(): number {
    return this.customer.calculateTotalPrice();
  }
}

class Customer {
  // Нужно задать значение свойству items или сделать его необязательным
  private items: Item[];

  calculateTotalPrice(): number {
    // вычисление общей цены на основе items
  }
}
