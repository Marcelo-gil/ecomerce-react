import React from "react";
import { Text, Stack, Center, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <>
      <Stack mt="250" spacing={3}>
        <Center>
          <Text fontSize="6xl">404</Text>
        </Center>
      </Stack>
      <Stack spacing={3}>
        <Center>
          <Link to="/">
            <Button colorScheme="blackAlpha" mt="5">
              Volver a la tienda
            </Button>
          </Link>
        </Center>
      </Stack>
    </>
  );
};

export default Notfound;
