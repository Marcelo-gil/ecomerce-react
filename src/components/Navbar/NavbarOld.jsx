import React from "react";
import logo from "../../imagenes/logo.png";
import { CartWidget } from "../CartWidget/CartWidget";
import MenuNavBar from "../../MenuNavBar/MenuNavBar";
import { Text, Stack, Image } from "@chakra-ui/react";
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
    
    <Stack
  spacing={8}
  align="center"
  justify={["center", "space-between", "flex-end", "flex-end"]}
  direction={["column", "row", "row", "row"]}
  pt={[4, 4, 0, 0]}
>
      <div style={styles.branchContainer}>
        <Link to="/">
          <Image     
            boxSize='50px'    
            objectFit='cover'
            src={logo} alt="Logo" />
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
   </Stack>
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
