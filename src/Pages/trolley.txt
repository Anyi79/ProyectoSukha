import { useState } from "react";
import React from "react";


const ShopCart = () => {
  const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem("cartProducts")) || []);
  console.log(cartProducts)

  const removeCartProducts = () => {
    localStorage.removeItem("cartProducts");
    setCartProducts([]);
  }

  return (
    <div>
      {cartProducts.map((product) => {
        return (
          <div key={product.id}>
           <h1>{product.name}</h1>
            <p>{product.price}€</p>
          </div>
        )
      })}
      <button onClick={() => removeCartProducts()}>clear cart</button>
    </div>
  )
}

export default ShopCart;