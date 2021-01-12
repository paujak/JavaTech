export default class Product {
    constructor(product) {
      this.id = product.id;
      this.title = product.title;
      this.price = product.price;
      this.imageUrl = product.imageUrl;
      this.description = product.description;
      this.quantity = product.quantity;
    }
  }