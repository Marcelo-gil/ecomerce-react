import React from "react";
import { NavLink, Link } from "react-router-dom";

const MenuNavBar = ({ categorias }) => {
  return (
    <nav style={styles.nav}>
      <Link style={styles.links} to="/">
        Home
      </Link>
      {categorias.map((categoria) => {
        return (
          <NavLink key={categoria.id} to={categoria.route} style={styles.links}>
            {categoria.nombre}
          </NavLink>
        );
      })}
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "50%",
    margin: "auto",
    position: "sticky",
    alignContent: "center",

    gridCards: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
    },
  },
  li: {
    listStyle: "none",
    position: "sticky",
    alignContent: "center",
    top: 0,
    padding: "13 15px -2",
    margin: 0,
    transition: "transform 1s",
  },
  links: {
    padding: 10,
    textDecoration: "none",
  },
};
export default MenuNavBar;
