import { React, useState, useEffect } from "react";
import "../../css/main.css";
import ItemList from "../ItemList";
import { Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { API } from "../../utils/api";
import { getProducto } from "../../utils/producto";

const getItems = async (id) => {
  const url = id ? `${API.CATEGORY}${id}/products` : API.LIST;
  const response = await fetch(url);
  const informacion = await response.json();
  let productosApi = [];
  informacion.forEach((item) => {
    productosApi.push(getProducto(item));
  });
  return productosApi;
};

const idsCategorias = {
  "clothes" : 1,
  "electronics" : 2,
  "furniture" : 3,
  "shoes" : 4,
  "others" : 5,
};

const ItemListContainer = ({ greeting, onItemClick }) => {
  const { idCategoria: nombreCategoria } = useParams();

  const idCategoria = idsCategorias[nombreCategoria];

  const [misProductos, setListadoProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getItems(idCategoria)
      .then((res) => {        
        setListadoProductos(res);
      })
      .catch((e) => {
        console.log("No se cumplio la promesa");
      }).finally(() => {
        setLoading(false);
      });
  }, [idCategoria]);

  return (
    <>
      <section style={styles.container}>
        <Text fontSize="3xl" style={styles.titulo}>
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
    color: "black",
  },
};

export default ItemListContainer;
