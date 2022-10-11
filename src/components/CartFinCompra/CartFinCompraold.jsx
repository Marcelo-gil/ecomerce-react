/* import { useState } from "react"; */
import React from "react";
import { Text, Box, Stack } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const CartFinCompra = ({ cartFinCompra }) => {
    const Navigate = useNavigate();
    console.log("IDC"); 
    console.log(cartFinCompra);
  return (
    <>
      <Link to={Navigate(-1)}>
        <Box
          w="320px"
          h="450px"
          rounded="20px"
          overflow="hidden"
          bg={"gray.100"}
          mt={10}
          ml={10}
        >
          <Stack align="center">
            <Text fontSize="1xl" mt="10%" as="b">
              Nombre:
                <input
                type="text" 
                placeholder="Nombre"
                value={cartFinCompra.nombre}
                /* onChange={(e) => setNombre(e.target.value)} */
                />
            </Text>
          </Stack>
          <Stack align="center">
            <Text fontSize="1xl" mt="5%" as="b">
              Apellido:
              <input
                type="text" 
                placeholder="Apellido"
                value={cartFinCompra.apellido}
                /* onChange={(e) => setApellido(e.target.value)} */
                />
            </Text>
          </Stack>
          <Stack align="center">
            <Text fontSize="1xl" mt="5%" as="b">
              Apellido:
              <input
                type="phone" 
                placeholder="Telefono"
                value={cartFinCompra.telefono}
                /* onChange={(e) => setTelefono(e.target.value)} */
                />
            </Text>
          </Stack>
          <Stack align="center">
            <Text fontSize="1xl" mt="5%" as="b">
              Email:
              <input
                type="email" 
                placeholder="Email"
                value={cartFinCompra.email}
                /* onChange={(e) => setEmail(e.target.value)} */
                />
            </Text>
          </Stack>
         
        </Box>
      </Link>
    </>
  );
};
export default CartFinCompra;