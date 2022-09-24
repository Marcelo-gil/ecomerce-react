import { React, useState, useEffect } from "react";
import "../../css/main.css";
import ItemList from "../ItemList";
import { Spinner, Text } from "@chakra-ui/react";
/*import { accionAsincrona } from "../../utils";*/
import { useParams } from "react-router-dom";
import { API } from "../../utils/api";

/* url  fakestore */
/*  const url = id ? `${API.CATEGORY}${id}` : API.LIST; */

const traerProductosApi = async (id) => {
  /* const idCat=id.substr(-1) */
  const url = id ? `${API.CATEGORY}${id}/products` : API.LIST;
  // const url = API.LIST;
  const response = await fetch(url);
  const informacion = await response.json();

  /* delay de 2" de acuerdo a la consigna */
  /* await accionAsincrona(); */

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
      imagenArt: item.images[0],
      rating: item.rating,
      category: item.category.id,
      descripcion: item.description,
    };
    xid += 1;
  });
  return productosApi;
};

const idsCategorias = {
  "Clothes" : 1,
  "Electronics" : 2,
  "Furniture" : 3,
  "Shoes" : 4,
  "Others" : 5,
};

const ItemListContainer = ({ greeting, onItemClick }) => {
  const { idCategoria: nombreCategoria } = useParams();

  const idCategoria = idsCategorias[nombreCategoria];

  const [misProductos, setListadoProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    traerProductosApi(idCategoria)
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
