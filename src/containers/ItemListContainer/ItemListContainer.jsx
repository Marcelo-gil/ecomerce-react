import { React, useState, useEffect } from "react";
import "../../css/main.css";
import ItemList from "./ItemList/ItemList";
import { SimpleGrid, Spinner, Stack, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

const idsCategorias = {
  electronics: 1,
  jewelery: 2,
  mens_clothing: 3,
  womens_clothing: 4,
};

const ItemListContainer = ({ greeting, onItemClick }) => {
  const { idCategoria: nombreCategoria } = useParams();
  const idCategoria = idsCategorias[nombreCategoria];
  const [misProductos, setListadoProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    const productsCollection = collection(db, "productos");
    let url = productsCollection;
    if (idCategoria) {
      url = query(productsCollection, where("category.id", "==", idCategoria));
    }
    getDocs(url)
      .then((data) => {
        const lista = data.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setListadoProductos(lista);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [idCategoria]);

  return (
    <>
      <Stack align="center">
        <Text fontSize="3xl" style={styles.titulo}>
          {greeting}
        </Text>
      </Stack>
      <SimpleGrid minChildWidth="300px" spacing="10px">
        {loading ? (
          <Spinner color="red.500" />
        ) : error ? (
          <h1>Ocurrio un error</h1>
        ) : (
          <ItemList misProductos={misProductos} onItemClick={onItemClick} />
        )}
      </SimpleGrid>
    </>
  );
};

const styles = {
  titulo: {
    fontFamily: "",
    fontStyle: "italic",
    color: "black",
  },
};

export default ItemListContainer;
