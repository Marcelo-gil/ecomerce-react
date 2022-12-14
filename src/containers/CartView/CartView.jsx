import { React, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../../components/Cart/CartItem/CartItem";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  TableContainer,
  Button,
  Text,
  Center,
} from "@chakra-ui/react";

const Cart = () => {
  const navigate = useNavigate();
  const { totalCarrito, carrito, removeItem, clear } = useContext(CartContext);
  return (
    <>
      <Center>
        <TableContainer maxWidth="100%" bg="gray.100">
          <Table size="sm" variant="striped" colorScheme="teal">
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
              {carrito &&
                carrito.map((item) => (
                  <CartItem
                    item={item}
                    removeItem={removeItem}
                    key={item.producto.id}
                  />
                ))}
            </Tbody>
            <Tfoot>
              {totalCarrito === 0 ? (
                <Tr>
                  <Th boxSize="50px"></Th>
                  <Th>
                    <Text fontSize="20px">
                      No quedan Articulos en el Carrito
                    </Text>
                    <Link to="/">
                      <Button colorScheme="blackAlpha" mt="5">
                        Volver a la tienda
                      </Button>
                    </Link>
                    <Button
                      onClick={() => navigate(-1)}
                      to="/"
                      colorScheme="blackAlpha"
                      mt="5"
                      ml="5"
                    >
                      Ultimo Articulo
                    </Button>
                  </Th>
                </Tr>
              ) : (
                <>
                  <Tr>
                    <Th></Th>
                    <Th fontSize="20px">
                      <Center>Total ${totalCarrito}</Center>
                    </Th>
                  </Tr>
                  <Tr>
                    <Th boxSize="50px"></Th>
                    <Th>
                      <Button
                        colorScheme="blackAlpha"
                        type="Submit"
                        className="button"
                        w="160px"
                        onClick={() => {
                          swal({
                            title: "Estas Seguro de Vaciar el Carrito?",
                            text: "Una vez vaciado el carrito no podra recuperarlo",
                            icon: "warning",
                            buttons: true,
                            dangerMode: true,
                          }).then((willDelete) => {
                            if (willDelete) {
                              clear();
                              navigate("/");
                            } else {
                              swal("Carrito salvado!");
                            }
                          });
                        }}
                      >
                        Vaciar Carrito
                      </Button>
                      <Link to="/cart/confirmar">
                        <Button
                          colorScheme="blackAlpha"
                          type="Submit"
                          className="button"
                          ml="5"
                        >
                          Finalizar Compra
                        </Button>
                      </Link>
                    </Th>
                    <Th></Th>
                  </Tr>
                </>
              )}
            </Tfoot>
          </Table>
        </TableContainer>
      </Center>
    </>
  );
};

export default Cart;
