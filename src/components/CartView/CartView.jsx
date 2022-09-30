import { React, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { carrito, removeItem } = useContext(CartContext);

  return (
    <>
      <div>Cart</div>
      {carrito ? (
        carrito.map((item) => (
          <CartItem
            item={item}
            removeItem={removeItem}
            key={item.producto.id}
          />
        ))
      ) : (
        <div>Vacio</div>
      )}
    </>
  );
};

export default Cart;
