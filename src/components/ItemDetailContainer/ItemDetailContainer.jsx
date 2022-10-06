import { React, useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { doc, getDoc, collection } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [miProducto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const productCollection = collection(db, "productos");
    const refDoc = doc(productCollection, id);
    getDoc(refDoc)
      .then((res) => {
        setLoading(false);
        setProducto({ id: res.id, ...res.data() });
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);
  return (
    <>
      <SimpleGrid minChildWidth="300px" spacing="10px">
        {loading ? (
          <Spinner color="red.500" />
        ) : error ? (
          <h1>Ocurrio un error</h1>
        ) : (
          <ItemDetail item={miProducto} idArt={id} />
        )}
      </SimpleGrid>
    </>
  );
};

export default ItemDetailContainer;
