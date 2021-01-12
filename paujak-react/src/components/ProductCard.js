import React from 'react'
import PropTypes from 'prop-types'


var ProductCard = (props) => {
    var { id, title, imageUrl, price } = props;
    return (
      <div className="col-3 my-2">
        <div className="card text-center">
           <img src={ imageUrl } className="card-img-top img-fluid" alt={ title } />
            <div className="card-body">
                <h5 className="card-title">{ title }</h5>
                <p className="card-text">Kaina: { price } EUR</p>
                <button className="btn btn-primary" onClick={props.onClick.bind(this, id)}>Details</button>
            </div>
        </div>
      </div>
    )
  }

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  // imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

export default ProductCard
