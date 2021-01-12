import React from 'react'

var ProductCard = (props) => {
    var { id, title, imageSrc, tipas } = props;
    return (
      <div className="col-3 my-2">
        <div className="card text-center">
           <img src={ imageSrc } className="card-img-top img-fluid" alt={ title } />
            <div className="card-body">
                <h5 className="card-title">{ id }</h5>
                <p className="card-text">{ tipas } </p>
                <button className="btn btn-primary" onClick={props.onClick.bind(this, id)}>Daugiau</button>
            </div>
        </div>
      </div>
    )
  }


export default ProductCard
