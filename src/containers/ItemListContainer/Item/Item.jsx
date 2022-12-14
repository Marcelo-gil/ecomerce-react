import { Text, Box, Stack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <>
      <Link to={`/item/${producto.id}`}>
        <Box
          w="320px"
          h="500px"
          rounded="20px"
          overflow="hidden"
          bg={producto.stock < 1 ? "gray" : "gray.100"}
          mt={10}
          ml={10}
          align="center"
        >
          {producto.stock < 1 && (
            <Text color={"red"} bg="black">
              Sin Stock
            </Text>
          )}
          <Image
            src={producto.images[0]}
            alt="Card Image"
            boxSize="300px"
            mt="10%"
            cursor="pointer"
          />
          <Stack align="center">
            <Text fontSize="1xl" mt="10%" as="b">
              {producto.title}
            </Text>
          </Stack>
          <Stack align="center">
            <Text fontSize="1xl" mt="5%" as="b">
              ${producto.price}
            </Text>
          </Stack>
        </Box>
      </Link>
    </>
  );
};
export default Item;
