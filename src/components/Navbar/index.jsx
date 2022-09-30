import React from "react";
import logo from "../../imagenes/logo.png";
import { CartWidget } from "../CartWidget";
import MenuNavBar from "../../MenuNavBar";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const categorias = [
  { id: 1, nombre: "Clothes", route: "/category/clothes" },
  { id: 2, nombre: "Electronics", route: "/category/electronics" },
  { id: 3, nombre: "Furniture", route: "/category/furniture" },
  { id: 4, nombre: "Shoes", route: "/category/shoes" },
  { id: 5, nombre: "Others", route: "/category/others" },
];
const NavBar = () => {
  return (
    <header style={styles.container}>
      <div style={styles.branchContainer}>
        <Link to="/">
          <img style={styles.imagen} src={logo} alt="Logo" />
        </Link>
      </div>
      <div style={styles.branchContainer}>
        <Text fontSize="3xl" style={styles.titulo}>
          Fake Store
        </Text>
      </div>
      <MenuNavBar categorias={categorias} />
      <div style={styles.branchContainer}>
        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>
    </header>
  );
};

const styles = {
  container: {
    backgroundImage: "linear-gradient(180deg, #ff7b00, yellow)",
    position: "sticky",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 5fr 1fr",
  },
  branchContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  titulo: {
    marginLeft: 10,
    color: "white",
  },
  imagen: {
    width: "35%",
  },
};

export default NavBar;
