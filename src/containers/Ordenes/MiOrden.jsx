import { React, useState, useEffect } from "react";
import { SimpleGrid, Spinner, Center, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { doc, getDoc, collection } from "firebase/firestore";
import OrdenTable from "../../components/ordenes/OrdenTable";
import swal from "sweetalert";

const MiOrden = () => {
  const { id } = useParams();
  const [miOrden, setOrden] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const ordenCollection = collection(db, "ventas");
    const refDoc = doc(ordenCollection, id);
    getDoc(refDoc)
      .then((res) => {
        setLoading(false);
        res.data() === undefined
          ? setError(true)
          : setOrden({ id: res.id, ...res.data() });
      })
      .catch((e) => {
        swal("Error Buscando Orden!", e.message, "error");
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
              <Text mt="250" as="b" fontSize="5xl">
                Orden No Encontrada
              </Text>
            </Center>
          </>
        ) : (
          <OrdenTable
            items={miOrden.items}
            totalOrden={miOrden.total}
            idOrden={id}
          />
        )}
      </SimpleGrid>
    </>
  );
};

export default MiOrden;
