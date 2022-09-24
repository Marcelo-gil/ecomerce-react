import React from "react";
import logo from "../../imagenes/logo.png";
import { CartWidget } from "../CartWidget/CartWidget";
import MenuNavBar from "./MenuNavBar";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

/* const categorias = [
  { id: 0, nombre: "Men's clothing", route: "/category/men's clothing" },
  { id: 1, nombre: "Jewelery", route: "/category/jewelery" },
  { id: 2, nombre: "Electronics", route: "/category/electronics" },
  { id: 3, nombre: "Women's clothing", route: "/category/women's clothing" },
]; */
const categorias = [
  { id: 1, nombre: "Clothes", route: "/categories/Clothes" },
  { id: 2, nombre: "Electronics", route: "/categories/Electronics" },
  { id: 3, nombre: "Furniture", route: "/categories/Furniture" },
  { id: 4, nombre: "Shoes", route: "/categories/Shoes" },
  { id: 5, nombre: "Others", route: "/categories/Others" },
];
const NavBar = () => {
  return (
    <header style={styles.container}>
      <Link to="/">
        <img style={styles.imagen} src={logo} alt="Logo" />
        <Text fontSize="4xl" style={styles.titulo}>Fake Store</Text>
      </Link>
      <MenuNavBar categorias={categorias} />
      <Link to="/cart">
          <CartWidget />
      </Link>
    </header>
  );
};

const styles = {
  container: {
    backgroundImage: "linear-gradient(180deg, #ff7b00, yellow)",
    position: "sticky",
    display: "flex",
  },
  titulo: {
    marginLeft: 10,
    color: "white",
  },
  imagen: {
    width: "6%",
  },
};

export default NavBar;
