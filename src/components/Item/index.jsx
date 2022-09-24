import ItemCount from "../ItemCount/ItemCount";
import swal from "sweetalert";
import { Text, Box, Stack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  const onAdd = (count) => {
    swal(
      "Agregaste " + count + " " + producto.nombre + " al Carrito",
      "Atencion!!",
      "success"
    );
  };
  return (
    <>
      <Box
        w="300px"
        h="650px"
        rounded="20px"
        overflow="hidden"
        bg={producto.stock < 1 ? "gray.700" : "gray.100"}
        mt={10}
      >
        <Link to={`/product/${producto.id}`}>
          <Image
            src={producto.imagenArt}
            alt="Card Image"
            boxSize="300px"
            mt="10%"
            cursor="pointer"
          />
        </Link>
        <Stack align="center">
          <Text fontSize="1xl" mt="20%" as="b">
            {producto.nombre}
          </Text>
        </Stack>
        <Stack align="center">
          <Text fontSize="1xl" mt="5%" as="b">
            ${producto.precio}
          </Text>
        </Stack>
        <Stack align="center">
          <ItemCount
            stock={producto.stock}
            initial={producto.initial}
            onAdd={onAdd}
          />
        </Stack>
      </Box>
    </>
  );
};
export default Item;
