import axios from "axios";
import React, { Component } from "react";
import ProductAdminTableComponent from "./ProductAdminTableComponent";

class AdministrationContainer extends Component {
  
  constructor() {
    super();
    this.state = { products: [] };
  }

  delete = (id) => {
    axios.delete(`${process.env.PUBLIC_URL}/api/products/${id}`)
    .then(response => this.setState({products: [...this.state.products.filter((product) => product.id !== id)],
    }));
  }

  edit = (id) => {
    this.props.history.push(`/admin/${id}`);
  }

  add = () => {
    this.props.history.push('/admin/new');
  }

  componentDidMount() {
    document.title = "My photo e-shop | Administration Panel";
    const loadProducts = async () => {
      let response = await axios.get(`${process.env.PUBLIC_URL}/api/products/`);
      this.setState({ products: response.data });
    };
    loadProducts();
  }

  render() {
    if (this.state.products.length > 0) {
      return (
        <div>
        <div className="h2 col-10 mx-auto mt-2">Administration Panel</div>
        <ProductAdminTableComponent products={this.state.products} delete={this.delete} edit={this.edit} add={this.add} />
        </div>
      );
    } else {
      return (
        <div>
        <div className="h2 col-10 mx-auto mt-2">Administration Panel</div>
        <div className="d-flex justify-content-center my-5">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        </div>
      );
    }
  }
}

export default AdministrationContainer;
