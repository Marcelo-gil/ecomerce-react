import React, { useContext } from "react";
import CarritoIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../../Context/CartContext";

export const CartWidget = () => {
  const { cantidad } = useContext(CartContext);
  return (
    <>
      <div style={styles.carrito}>
        <CarritoIcon style={styles.carritoIcon} />
        <div style={styles.carritoInfo}>{cantidad}</div>
      </div>
    </>
  );
};

const styles = {
  carrito: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    margin: "auto",
    marginRight: "15px",
    borderColor: "white",
    backgroundColor: "white",
    color: "black",
    borderRadius: "15px",
    padding: 10,
  },
  carritoIcon: {
    paddingTop: "10",
    paddingRight: "10",
  },
  carritoInfo: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
  },
  borrarCarritoContainer: {
    margin: "auto",
    alignContent: "center",
  },
  borrarCarrito: {
    borderColor: "black",
    backgroundColor: "black",
    color: "white",
    borderRadius: "15px",
  },
};
