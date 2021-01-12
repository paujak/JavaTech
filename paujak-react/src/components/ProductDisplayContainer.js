import React, { Component } from "react";
import axios from "axios";
import ProductDisplayComponent from "./ProductDisplayComponent";

export class ProductDisplayContainer extends Component {
  urlId = "";

  state = {
    id: "",
    title: "",
    imageUrl: "",
    description: "",
    price: "",
    quantity: "",
  };

  loaded = false;

  constructor(props) {
    super();
    this.urlId = props.match.params.id;
    document.title = `My photo e-shop | Product Detail (ID:${this.urlId})`;
    axios
      .get(`${process.env.PUBLIC_URL}/api/products/${this.urlId}`)
      .then((response) => {
        this.loaded = true;
        this.setState(response.data);
      });
  }

  onClose = () => {
    this.props.history.push("/products/");
  };

  render() {
    if (this.loaded) {
      return (
        <main className="container">
          <div className="row my-5">
            <ProductDisplayComponent item={this.state} onClose={this.onClose} />
          </div>
        </main>
      );
    } else {
      return (
        <div className="d-flex justify-content-center my-5">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }
  }
}

export default ProductDisplayContainer;
