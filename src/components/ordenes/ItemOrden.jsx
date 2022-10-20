import React from "react";
import { Td, Tr, Image, Text } from "@chakra-ui/react";

const ItemOrden = ({ item }) => {
  const { producto, cantidad } = item;
  return (
    <Tr>
      <Td>
        <Image src={producto.images[0]} alt="Card Image" boxSize="50px" />
      </Td>
      <Td>
        <Text>{producto.title}</Text>
      </Td>
      <Td isNumeric>{cantidad}</Td>
      <Td isNumeric>${producto.price}</Td>
      <Td isNumeric>${producto.price * cantidad}</Td>
    </Tr>
  );
};

export default ItemOrden;
