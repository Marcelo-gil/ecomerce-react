import { React, useState, useEffect } from "react";
import ItemDetail from "./ItemDetail/ItemDetail";
import { SimpleGrid, Spinner, Center, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { doc, getDoc, collection } from "firebase/firestore";
import swal from "sweetalert";

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
        res.data() === undefined ? (
          setError(true)
        ) : (
        setProducto({ id: res.id, ...res.data() })
      )
      })
      .catch((e) => {
        swal("Error Buscando Producto!", e.message, "error");
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
          <>
            <Center>
              <Spinner color="red.500" />
            </Center>
          </>
        ) : error ? (
          <>
            <Center>
              <Text mt="250" as="b" fontSize="5xl">Producto No Encontrado</Text>
            </Center>
          </>
        ) : (
          <ItemDetail item={miProducto} idArt={id} />
        )}
      </SimpleGrid>
    </>
  );
};

export default ItemDetailContainer;
