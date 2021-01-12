import React from "react";

function ProductDisplayComponent(props) {
  let { title, imageUrl, description, price, quantity } = props.item;
  return (
    <main className="container col-8">
      <div className="row mt-5">
        <div className="col-12">
          <div className="h2">{title}</div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-6">
          <img src={imageUrl} className="img-fluid border" alt={title} />
        </div>
        <div className="col-6">
          <p>{description}</p>
          <div className="d-flex align-items-end my-2"><strong>Price: {price} | Items left: {quantity}</strong></div>
          <button
            type="button"
            className="btn btn-primary d-flex align-item-end"
            onClick={props.onClose}
          >
            Close
          </button>
        </div>
        </div>
    </main>
  );
}

export default ProductDisplayComponent;
