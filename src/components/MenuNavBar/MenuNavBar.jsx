import React from "react";
import { NavLink } from "react-router-dom";

const MenuNavBar = ({ categorias }) => {
  return (
    <>
      <NavLink
        style={({ isActive }) => {
          return {
            ...styles.links,
            fontWeight: isActive ? 700 : 400,
          };
        }}
        to="/"
        end
      >
        Home
      </NavLink>
      {categorias.map((categoria) => {
        return (
          <NavLink
            style={({ isActive }) => {
              return {
                ...styles.links,
                fontWeight: isActive ? 700 : 400,
              };
            }}
            key={categoria.id}
            to={categoria.route}
          >
            {categoria.nombre}
          </NavLink>
        );
      })}
    </>
  );
};

const styles = {
  links: {
    backgroundColor: "transparent",
    padding: 10,
    textDecoration: "none",
  },
};
export default MenuNavBar;
