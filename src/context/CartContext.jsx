import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  /* Obtengo carrito del storage o creo uno vacio*/
  const [carrito, setCarrito] = useState(
    JSON.parse(localStorage.getItem("carrito")) ?? []
  );
  const [cantidad, setCantidad] = useState(0);
  const [totalCarrito, setTotalCarrito] = useState(0);
  useEffect(() => {
    let cantidad = 0;
    let totalCarrito = 0;
    carrito.forEach((item) => {
      cantidad += item.cantidad;
      totalCarrito += item.producto.price * item.cantidad;
    });
    setCantidad(cantidad);
    setTotalCarrito(totalCarrito);
    localStorage.setItem("carrito", JSON.stringify(carrito));
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
