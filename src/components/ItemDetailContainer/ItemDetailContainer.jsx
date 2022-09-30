import { React, useState, useEffect } from "react";
//import "../../css/main.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import { SimpleGrid, Spinner } from "@chakra-ui/react";
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
      <SimpleGrid minChildWidth='300px' spacing='10px'>
        {loading ? (
          <Spinner color="red.500" />
        ) : (
          <ItemDetail item={miProducto} idArt={id} />
        )}
      </SimpleGrid>
    </>
  );
};



export default ItemDetailContainer;
