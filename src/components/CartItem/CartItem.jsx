import React from "react";
import { Button, Td, Tr, Image } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
const CartItem = ({ item, removeItem }) => {
  const { producto, cantidad } = item;
  return (
    <>
      <Tr>
        <Td>
          <Image src={producto.images[0]} alt="Card Image" boxSize="50px" />
        </Td>
        <Td >
            {producto.title}
        </Td>
        <Td isNumeric>{cantidad}</Td>
        <Td isNumeric>${producto.price}</Td>
        <Td isNumeric>${producto.price * cantidad}</Td>
        <Td textAlign="center">
          <Button
            leftIcon={<DeleteIcon textAlign="center" />}
            onClick={() => removeItem(producto.id)}
          >
            Borrar
          </Button>
        </Td>
      </Tr>
    </>
  );
};

export default CartItem;
