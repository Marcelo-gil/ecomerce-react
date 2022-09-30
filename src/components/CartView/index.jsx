import { React, useContext } from "react";
import { CartContext } from '../../CartContext'
import CartItem from "../CartItem"

const Cart = () => {
  const { carrito, removeItem } = useContext(CartContext);  
  console.log(carrito);
  return (
    <>
      <div>Cart</div>
      {carrito
        ? carrito.map((item) =>(
        <CartItem item={item} removeItem={removeItem} key={item.producto.id} />
      ))
      : <div>Vacio</div>
      }
    </>
  );
};

export default Cart;
