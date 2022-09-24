import { React, useState, useEffect } from "react";
import "../../css/main.css";
import ItemDetail from "../ItemDetail";
import { Spinner } from "@chakra-ui/react";
import { accionAsincrona } from "../../utils";
import { useParams } from "react-router-dom";
import { API } from "../../utils/api";

const getItem = async (prodBuscar) => {
  const response = await fetch(
    `${API.PRODUCTO}${prodBuscar}`
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
    imagenArt: item.images[0],
    rating: item.rating,
    category: item.category.id,
    descripcion: item.description,
  };
  return producto;
};
const ItemDetailContainer = () => {
  const { id } = useParams();
  console.log(id);
  const [miProducto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getItem(id)
      .then((res) => {
        setLoading(false);
        setProducto(res);
      })
      .catch(() => {
        console.log("No se cumplio la promesa");
      });
  }, [id]);
  return (
    <>
      <article style={styles.gridCards}>
        {loading ? (
          <Spinner color="red.500" />
        ) : (
          <ItemDetail
            item={miProducto}
            idArt={id}
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
