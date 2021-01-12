import React from "react";
import ProductCard from "./ProductCard";

const ProductListComponent = (props) => {
  
    return props.list.map((item, index) => (
        <ProductCard
          key={index}
          id={item.id}
          imageUrl={item.imageUrl}
          title={item.title}
          price={item.price}
          onClick={props.details}
        />
        )
      )
  }

export default ProductListComponent;
