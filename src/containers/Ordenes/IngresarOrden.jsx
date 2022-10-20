import React, { useState } from "react";
import { Text, Box, Stack, Button, FormErrorMessage } from "@chakra-ui/react";
import { FormControl, FormLabel, Input, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const IngresarOrden = () => {
  const navigate = useNavigate();
  const [idOrden, setIdOrden] = useState("");
  return (
    <>
      <Center>
        <Box
          w="50%"
          bg="#E6FFFA"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <Center>
            <Text fontWeight="bold" fontSize="2xl">
              Ingresa tus Datos
            </Text>
          </Center>
          <Stack>
            <FormControl isRequired isInvalid={!idOrden.trim()}>
              <FormLabel>Id de Compra</FormLabel>
              <Input
                type="name"
                placeholder="Id de Compra"
                className="form"
                name="idCompra"
                onChange={(e) => {
                  setIdOrden(e.target.value);
                }}
              ></Input>
              <FormErrorMessage>Ingresá un ID</FormErrorMessage>
            </FormControl>
          </Stack>
          <Button
            onClick={() => navigate("/")}
            to="/"
            colorScheme="blackAlpha"
            mt="5"
            ml="5"
            w="160px"
          >
            Volver a la Tienda
          </Button>
          <Button
            ml="5"
            mt="5"
            colorScheme="blackAlpha"
            type="Submit"
            className="button"
            disabled={!idOrden.trim()}
            onClick={() => navigate("/order/" + idOrden)}
          >
            Buscar Compra
          </Button>
        </Box>
      </Center>
    </>
  );
};

export default IngresarOrden;
