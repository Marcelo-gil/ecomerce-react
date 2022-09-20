import React, { useState } from "react";
import sumarImg from "../../imagenes/sumar.png";
import restarImg from "../../imagenes/restar.png";
import { Text, Stack, Flex, Image, Badge, Button } from "@chakra-ui/react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > initial) {
      setContador(contador - 1);
    }
  };

  const agregarCarrito = () => {
    /* chequeo Contador por si initial viene con valor 0 */
    if (contador > 0) {
      onAdd(contador);
    }
  };
  return (
    <>
      <Stack align="center">
        <Flex>
          <Image
            src={sumarImg}
            alt="Card Image"
            boxSize="40px"
            mt="15%"
            cursor="pointer"
            onClick={sumar}
          ></Image>
          <Badge
            variant="solid"
            colorScheme="blue"
            rounded="full"
            px={15}
            boxSize="40px"
            mt="15%"
            align="center"
          >
            <Text fontSize="1xl" mt="100%" ml="5%">
              {contador}
            </Text>
          </Badge>
          <Image
            src={restarImg}
            alt="restar"
            boxSize="40px"
            mt="15%"
            cursor="pointer"
            onClick={restar}
          ></Image>
        </Flex>
      </Stack>
      <Stack align="center">
        <Button
          colorScheme="blackAlpha"
          disabled={stock === 0}
          onClick={agregarCarrito}
        >
          agregar al carrito
        </Button>
      </Stack>
    </>
  );
};

export default ItemCount;
