import React, { Component } from "react";
import axios from "axios";
import ProductDisplayComponent from "./ProductDisplayComponent";

export class ProductDisplayContainer extends Component {
  urlId = "";

  state = {
    pavadinimas: "",
    aprasymas: "",
    imageSrc: "",
    tipas: "",
    arKeltiVeliava: "",
  };

  loaded = false;

  constructor(props) {
    super();
    this.urlId = props.match.params.id;
    document.title = `Švenčių registras | ${this.urlId})`;
    axios
      .get(`${process.env.PUBLIC_URL}/api/sventes/${this.urlId}`)
      .then((response) => {
        this.loaded = true;
        this.setState(response.data);
      });
  }

  onClose = () => {
    this.props.history.push("/sventes/");
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
