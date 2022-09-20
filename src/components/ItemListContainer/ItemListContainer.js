import { React, useState, useEffect } from "react";
import "../../css/main.css";
import ItemList from "../ItemList";
import { Spinner, Text } from "@chakra-ui/react";
import { accionAsincrona } from "../../utils";

const traerProductosApi = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const informacion = await response.json();

  /* delay de 2" de acuerdo a la consigna */
  await accionAsincrona();

  let productosApi = [];
  let xid = 0;
  let xstock = 0;
  informacion.forEach((item) => {
    xstock = Math.floor(Math.random() * (10 - 2) + 2);
    productosApi[xid] = {
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
    xid += 1;
  });
  return productosApi;
};
const ItemListContainer = ({ greeting, onItemClick }) => {
  const [misProductos, setListadoProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    traerProductosApi()
      .then((res) => {
        setLoading(false);
        setListadoProductos(res);
      })
      .catch(() => {
        console.log("No se cumplio la promesa");
      });
  }, []);
  return (
    <>
      <section style={styles.container}>
        <Text fontSize="2xl" style={styles.titulo}>
          {greeting}
        </Text>
      </section>
      <article style={styles.gridCards}>
        {loading ? (
          <Spinner color="red.500" />
        ) : (
          <ItemList misProductos={misProductos} onItemClick={onItemClick} />
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
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
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

export default ItemListContainer;
