import React, { Component } from "react";
import ProductFormComponent from "./ProductFormComponent";
import axios from "axios";

export class ProductAdministrationContainer extends Component {

  urlId = "";
  state = {
      id: "",
      title: "",
      imageUrl: "",
      description: "",
      price: "",
      quantity: ""
  }

  constructor(props) {
    super();
    this.urlId = props.match.params.id;
    if (this.urlId === "new"){
        document.title = "My photo e-shop | New Product";
    } else {
        document.title = `My photo e-shop | Edit Product (ID:${this.urlId})`;
        axios.get(`${process.env.PUBLIC_URL}/api/products/${this.urlId}`).then(response => this.setState(response.data));
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSave = (event) => {
    event.preventDefault();
    axios.post(`${process.env.PUBLIC_URL}/api/products/post`, this.state).then(() => {
        this.props.history.push('/admin')
    });
  };

  handleUpdate = (event) => {
    event.preventDefault();
    axios.put(`${process.env.PUBLIC_URL}/api/products/${this.state.id}`, this.state).then(() => {
        this.props.history.push('/admin')
    });
  };

  handleCancel = (event) => {
    event.preventDefault();
    this.props.history.push('/admin/');
  }

  render() {
    if (this.urlId === "new")
    return (
      <div>
        <div className="h2 col-10 mx-auto mt-2">Insert new product</div>
        <ProductFormComponent
          onSubmit={this.handleSave}
          onChange={this.handleChange}
          item={this.state}
          onCancel={this.handleCancel}
        />
      </div>
    ); else 
    return (
        <div>
          <div className="h2 col-10 mx-auto mt-2">Edit product</div>
          <ProductFormComponent
            onSubmit={this.handleUpdate}
            onChange={this.handleChange}
            item={this.state}
            onCancel={this.handleCancel}
          />
        </div>
    );
  }
}

export default ProductAdministrationContainer;
