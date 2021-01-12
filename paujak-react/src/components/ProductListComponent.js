import React from "react";
import ProductCard from "./ProductCard";

const ProductListComponent = (props) => {
  
    return props.list.map((item, index) => (
        <ProductCard
          key={index}
          id={item.pavadinimas}
          imageUrl={item.imageSrc}
          title={item.pavadinimas}
          tipas={item.tipas}
          aprasymas={item.aprasymas}
          veliava={item.arKeltiVeliava}
          onClick={props.details}
        />
        )
      )
  }

export default ProductListComponent;
