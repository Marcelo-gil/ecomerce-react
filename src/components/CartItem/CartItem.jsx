import React from "react";
import { Button } from "@chakra-ui/react";

const CartItem = ({ item, removeItem }) => {
  const { producto, cantidad } = item;
  return (
    <>
      <div>{producto.nombre}</div>
      <div>Cantidad: {cantidad}</div>
      <Button onClick={() => removeItem(producto.id)}>Borrar</Button>
    </>
  );
};

export default CartItem;
