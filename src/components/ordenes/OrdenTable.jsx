import { React } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  Text,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  TableCaption,
  TableContainer,
  Button,
  Center,
} from "@chakra-ui/react";
import ItemOrden from "./ItemOrden";

const OrdenTable = ({ items, totalOrden, idOrden }) => {
  console.log(items);
  return (
    <>
      <Center>
        <TableContainer maxWidth="100%">
          <Text as='b' mt="5">ID de Compra: {idOrden}</Text>
          <Table mt="5" size="sm" variant="striped" colorScheme="teal">
          <TableCaption>ID de Compra: {idOrden}</TableCaption>
            <Thead>
              <Tr>
                <Th>Imagen</Th>
                <Th>Descripcion</Th>
                <Th isNumeric>Cantidad</Th>
                <Th isNumeric>Precio</Th>
                <Th isNumeric>Total</Th>
              </Tr>
            </Thead>
            <Tbody>
              {items &&
                items.map((item) => (
                  <ItemOrden item={item} key={item.producto.id} />
                ))}
            </Tbody>
            <Tfoot>
              <>
                <Tr>
                  <Th></Th>
                  <Th fontSize="20px">
                    <Center>Total ${totalOrden}</Center>
                  </Th>
                </Tr>
                <Tr>
                  <Th boxSize="50px"></Th>
                  <Th>
                    <Center>
                      <Link to="/order">
                        <Button colorScheme="blackAlpha" mt="5">
                          Otra Consulta
                        </Button>
                      </Link>                      <Link to="/">
                        <Button colorScheme="blackAlpha" ml="5" mt="5">
                          Volver a la tienda
                        </Button>
                      </Link>
                    </Center>
                  </Th>
                </Tr>
              </>
            </Tfoot>
          </Table>
        </TableContainer>
      </Center>
    </>
  );
};

export default OrdenTable;
