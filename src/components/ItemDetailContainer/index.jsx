import { React, useState, useEffect } from "react";
import "../../css/main.css";
import ItemDetail from "../ItemDetail";
import { Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { API } from "../../utils/api";
import { getProducto } from "../../utils/producto";

const getItem = async (prodBuscar) => {
  const response = await fetch(`${API.PRODUCTO}${prodBuscar}`);
  const item = await response.json();
  return getProducto(item);
};

const ItemDetailContainer = () => {
  const { id } = useParams();
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
          <ItemDetail item={miProducto} idArt={id} />
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
    gridTemplateColumns: "0.75fr 0.75fr 0.75fr 1fr  1fr  1fr 0.5fr",
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
