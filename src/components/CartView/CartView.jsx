import { React, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { Table, Thead, Tbody, Tfoot, Tr, Th, TableContainer, Stack, Button } from '@chakra-ui/react'
const Cart = () => {
  const { totalCarrito, carrito, removeItem } = useContext(CartContext);
  return (
    <>
      <TableContainer maxWidth="100%">
        <Table size='sm' variant='striped' colorScheme='teal'>
          <Thead>
            <Tr>
              <Th>Imagen</Th>
              <Th>Descripcion</Th>
              <Th isNumeric>Cantidad</Th>
              <Th isNumeric>Precio</Th>
              <Th isNumeric>Total</Th>
              <Th textAlign="center">Eliminar</Th>
            </Tr>
          </Thead>
          <Tbody>
            
              {carrito && (
                carrito.map((item) => (
                  <CartItem
                    item={item}
                    removeItem={removeItem}
                    key={item.producto.id}
                  />
                ))
              ) }
          </Tbody>
          <Tfoot>
            <Tr>              
              { totalCarrito===0 ? (
                <Stack align="center" mt="10">
                <Link  to="/">
                  <Button
                    colorScheme="blackAlpha"
                    mt="5"
                  >
                    Volver a la tienda
                  </Button>
                </Link>
              </Stack>
              ):(
              <>
              <Th boxSize="50px"></Th>
              <Th></Th>
              <Th></Th>
              <Th fontSize="20px" isNumeric>Total</Th>
              <Th fontSize="20px" isNumeric>${totalCarrito}</Th>
              </>
              )}
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
};

export default Cart;
