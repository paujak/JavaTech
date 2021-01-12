import React from 'react'

const ProductFormComponent = ({onChange, onSubmit, item, onCancel}) => {
    return (
        <form onSubmit={onSubmit} className="my-5 col-10 mx-auto">
          <div className="form-group">
            <label htmlFor="title">Product title</label>
            <input
              type="text"
              name="title"
              value={item.title}
              onChange={onChange}
              className="form-control" 
            />
          </div>
          <div className="form-group">
            <label htmlFor="imageUrl">Image URL</label>
            <input
              type="url"
              value={item.imageUrl}
              name="imageUrl"
              onChange={onChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              value={item.description}
              onChange={onChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              step="0.01"
              value={item.price}
              onChange={onChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={item.quantity}
              onChange={onChange}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary mx-2" onClick={onSubmit}>
            Save
          </button>
          <button type="cancel" className="btn btn-secondary mx-2" onClick={onCancel}>
            Cancel
          </button>
        </form>
      );
}

export default ProductFormComponent
