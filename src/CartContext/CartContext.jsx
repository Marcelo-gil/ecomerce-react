import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const addItem = (producto, cantidad) => {
    const isInCart = carrito.findIndex((itemCart) => itemCart.producto.id === producto.id)
    if (isInCart !== -1) {
        const carritoCopia = carrito.filter(producto => producto !==carrito[isInCart])
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
    <CartContext.Provider value={{ carrito, addItem, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;