import { React, useState, useEffect } from "react";
import "../../css/main.css";
import ItemDetail from "../ItemDetail";
import { Spinner } from "@chakra-ui/react";
import { accionAsincrona } from "../../utils";

const getItem = async (prodBuscar) => {
  const response = await fetch(
    `https://fakestoreapi.com/products/${prodBuscar}`
  );
  const item = await response.json();

  /* delay de 2" de acuerdo a la consigna */
  await accionAsincrona();

  let xstock = 0;
  xstock = Math.floor(Math.random() * (10 - 2) + 2);
  const producto = {
    id: item.id,
    nombre: item.title.toUpperCase(),
    sku: item.id,
    precio: item.price,
    stock: xstock,
    initial: 1,
    oferta: false,
    imagenMeli: true,
    novedad: false,
    imagenArt: item.image,
    rating: item.rating,
    category: item.category,
    descripcion: item.description,
  };
  return producto;
};
const ItemDetailContainer = ({ idProducto, limpiarIdProducto }) => {
  const [miProducto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getItem(idProducto)
      .then((res) => {
        setLoading(false);
        setProducto(res);
      })
      .catch(() => {
        console.log("No se cumplio la promesa");
      });
  }, [idProducto]);
  return (
    <>
      <article style={styles.gridCards}>
        {loading ? (
          <Spinner color="red.500" />
        ) : (
          <ItemDetail
            item={miProducto}
            idArt={idProducto}
            limpiarIdProducto={limpiarIdProducto}
          />
        )}
      </article>
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    textAling: "center",
  },

  gridCards: {
    display: "grid",
    gridTemplateColumns: "0.5fr 1fr 0.5fr 1fr 0.5fr 1fr 0.5fr",
  },
  imagen: {
    width: "50%",
    height: "50%",
    marginLeft: "580px",
  },
  titulo: {
    fontFamily: "",
    fontStyle: "italic",
    color: "#ff7b00",
  },
};

export default ItemDetailContainer;
