import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [cantidad, setCantidad] = useState(0);
  const [totalCarrito, setTotalCarrito] = useState(0);
  useEffect(() => {
    let cantidad = 0;
    let totalCarrito=0;
    carrito.forEach((producto) => (
      cantidad = cantidad + producto.cantidad
      ));
      setCantidad(cantidad);
      carrito.forEach((item) => (
        totalCarrito += item.producto.precio*item.cantidad
      ));
      setTotalCarrito(totalCarrito);
    }, [carrito]);
  const addItem = (producto, cantidad) => {
    const isInCart = carrito.findIndex(
      (itemCart) => itemCart.producto.id === producto.id
    );
    if (isInCart !== -1) {
      const carritoCopia = carrito.filter(
        (producto) => producto !== carrito[isInCart]
      );
      setCarrito([...carritoCopia, { producto, cantidad }]);
    } else {
      setCarrito([...carrito, { producto, cantidad }]);
    }
  };

  const removeItem = (id) => {
    const arrayFiltrado = carrito.filter(({ producto }) => {
      return producto.id !== id;
    });
    setCarrito(arrayFiltrado);
  };

  const clear = () => {
    setCarrito([]);
  };

  return (
    <CartContext.Provider
      value={{ cantidad, totalCarrito, carrito, addItem, removeItem, clear }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
