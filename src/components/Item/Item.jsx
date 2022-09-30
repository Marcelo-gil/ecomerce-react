import { Text, Box, Stack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <>
      <Link to={`/item/${producto.id}`}>
        <Box
          w="300px"
          h="450px"
          rounded="20px"
          overflow="hidden"
          bg={producto.stock < 1 ? "gray.700" : "gray.100"}
          mt={10}
          ml={10}
        >
          <Image
            src={producto.imagenArt[0]}
            alt="Card Image"
            boxSize="300px"
            mt="10%"
            cursor="pointer"
          />
          <Stack align="center">
            <Text fontSize="1xl" mt="10%" as="b">
              {producto.nombre}
            </Text>
          </Stack>
          <Stack align="center">
            <Text fontSize="1xl" mt="5%" as="b">
              ${producto.precio}
            </Text>
          </Stack>
        </Box>
      </Link>
    </>
  );
};
export default Item;
