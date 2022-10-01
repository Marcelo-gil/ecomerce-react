import React from "react";
import { NavLink, Link } from "react-router-dom";

const MenuNavBar = ({ categorias }) => {
  return (
    <>
      <Link style={styles.links} to="/">
        Home
      </Link>
      {categorias.map((categoria) => {
        return (
          <NavLink style={styles.links} key={categoria.id} to={categoria.route} >
            {categoria.nombre}
          </NavLink>
        );
      })}
   </>
  );
};

const styles = {
  links: {
    padding: 10,
    textDecoration: "none",
  },
};
export default MenuNavBar;
