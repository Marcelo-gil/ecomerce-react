import { React, useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import CartItem from "../CartItem/CartItem";
import CartFinCompra from "../CartFinCompra/CartFinCompra";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore";
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
  Stack,
} from "@chakra-ui/react";

const Cart = () => {
  const navigate = useNavigate();
  const { totalCarrito, carrito, removeItem, clear } = useContext(CartContext);
  
  const [datosComprador, setDatosComprador] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    telefono: "",
    email: "",
    NombreTarjeta: "",
    NumeroTarjeta: "",
  });

  const asignaInput = (event) => {
    setDatosComprador({
        ...datosComprador,
        [event.target.name] : event.target.value
    })
 }
  const finalizarCompra = ()=>{
    
    const ventasCollection = collection(db,"ventas");
    addDoc(ventasCollection, {
      datosComprador,
      items: carrito,
      date: serverTimestamp(),
      totalCarrito,
    })
    .then(result=>{
      console.log(result.id);
      clear();
    })
  }
  const actualizarStock = () =>{
    const updateStock = doc(db, "products", "Uh9qa5rZhfhAgnugRQAx");
    updateDoc(updateStock,{stock:50});
  }
  return (
    <>
      <TableContainer maxWidth="100%">
        <Table size="sm" variant="striped" colorScheme="teal">
          <Thead>
            <Tr >
              <Th>Imagen</Th>
              <Th>
                Descripcion
              </Th>
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
          {/* <Tfoot>
            {totalCarrito === 0 ? (
              <Tr>
                <Th boxSize="50px"></Th>
                <Th>
                  <Text fontSize="20px">No quedan Articulos en el Carrito</Text>
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
                  <Th boxSize="50px"></Th>
                  <Th></Th>
                  <Th></Th>
                  <Th fontSize="20px" isNumeric>
                    Total
                  </Th>
                  <Th fontSize="20px" isNumeric>
                    ${totalCarrito}
                  </Th>
                </Tr>
                <Link to="/">
                  <Button onClick={clear}>Vaciar Carrito</Button>
                  <Button onClick={ingresarDatosComprador}>Finalizar Compra</Button>
                </Link>
              </>
            )}
          </Tfoot> */}
        </Table>
      </TableContainer>
      <Stack>
            {totalCarrito === 0 ? (
              <>
                <Text fontSize="20px">No quedan Articulos en el Carrito</Text>
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
              </>
            ) : (
              <>
                <Stack>
                  <Text fontSize="20px">
                    Total
                  </Text>
                  <Text fontSize="20px">
                    ${totalCarrito}
                  </Text>
                  <Link to="/">
                    <Button onClick={clear}>Vaciar Carrito</Button>
                    <Button onClick={ingresarDatosComprador}>Finalizar Compra</Button>
                  </Link>
                </Stack>
              </>
            )}
      </Stack>
      
    </>
  );
};

export default Cart;
