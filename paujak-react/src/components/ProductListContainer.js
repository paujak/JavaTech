import React from "react";
import "./../App.css";
import ProductListComponent from "./ProductListComponent";
import axios from "axios";

class ProductListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
    this.produktas = {};
    this.newProductAdded = false;
  }

  componentDidMount() {
    document.title = "My photo e-shop | Products";
    const loadProducts = async () => {
      let response = await axios.get(`${process.env.PUBLIC_URL}/api/products/`);
      this.setState({ products: response.data });
    };
    loadProducts();
  }

  details = (id) => {
    this.props.history.push(`/products/${id}`);
  }

  render() {
    if (this.state.products.length > 0) {
      return (
        <main className="container">
          <div className="row my-5">
            <ProductListComponent list={this.state.products} details={this.details}/>
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

export default ProductListContainer;
