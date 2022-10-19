import { React, useState, useEffect } from "react";
import { SimpleGrid, Spinner, Center } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { doc, getDoc, collection } from "firebase/firestore";
import OrdenView from "./OrdenView";

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
        setOrden({ id: res.id, ...res.data() });
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
          <>
            <Center>
              <Spinner color="red.500" />
            </Center>
          </>
        ) : error ? (
          <h1>Ocurrio un error</h1>
        ) : (
          <OrdenView
            items={miOrden.items}
            totalOrden={miOrden.total}
            idArt={id}
          />
        )}
      </SimpleGrid>
    </>
  );
};

export default MiOrden;
