import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import swal from "sweetalert";
import { Text, Stack, Box, Image, Badge, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


const ItemDetail = ({ item  }) => {
  const navigate = useNavigate();
  const onAdd = (count) => {
    swal(
      "Agregaste " + count + " " + item.nombre + " al Carrito",
      "Atencion!!",
      "success"
    );
  };
  return (
    <>
      <Box
        w="250px"
        h="500px"
        rounded="20px"
        overflow="hidden"
        bg={item.stock < 1 ? "gray.700" : "gray.100"}
        mt={10}
        ml={10}
      >
      <Image
          src={item.imagenArt[0]}
          alt="Card Image"
          boxSize="300px"
          mt="35%"
        />
      </Box>

      <Box
        w="250px"
        h="500px"
        rounded="20px"
        overflow="hidden"
        bg={item.stock < 1 ? "gray.700" : "gray.100"}
        mt={10}
        ml={5}
      >
      <Image
          src={item.imagenArt[1]}
          alt="Card Image"
          boxSize="300px"
          mt="35%"
        />
      </Box>

      <Box
        w="250px"
        h="500px"
        rounded="20px"
        overflow="hidden"
        bg={item.stock < 1 ? "gray.700" : "gray.100"}
        mt={10}
        ml={5}
      >
      <Image
          src={item.imagenArt[2]}
          alt="Card Image"
          boxSize="300px"
          mt="35%"
        />
      </Box>

      <Box
        w="300px"
        h="550px"
        rounded="20px"
        overflow="scroll"
        bg={item.stock < 1 ? "gray.700" : "gray.100"}
        mt={10}
        ml="5"
        >
        <Stack align="center">
          <Text fontSize="1xl" mt="20%" as="b" ml="5%">
            {item.nombre}
          </Text>
        </Stack>
        <Stack align="center">
          <Text fontSize="2xl" mt="10%" as="b">
            ${item.precio}
          </Text>
        </Stack>
        <Stack align="center">
          <Text fontSize="1xl" as="b" mt={5}>
            Que saber de nuestro producto:
          </Text>
          <Text mt="5%">{item.descripcion}</Text>
        </Stack>
      </Box>

      <Box
        w="300px"
        h="550px"
        rounded="20px"
        align="center"
        mt={10}
        overflow="hidden"
        bg={item.stock < 1 ? "gray.700" : "gray.100"}
        ml="5"
      >
        <Stack align="center" mt={10}>
          {item.stock > 0 ? (
            <Text fontSize="20px" color="green" as="b" ml="8%">
              Stock Disponible
            </Text>
          ) : (
            <Text as="s" ml="10">
              Sin Stock
            </Text>
          )}
        </Stack>
        <Stack align="center" mt="20">
          <Badge variant="solid" colorScheme="green" rounded="full" px={2}>
            Stock: {item.stock}
          </Badge>
        </Stack>
        <Stack align="center" mt="20">
          <ItemCount stock={item.stock} initial={item.initial} onAdd={onAdd} />
        </Stack>
        <Stack align="center" mt="10">
          <Button onClick={() => navigate(-1)} to='/' colorScheme="blackAlpha" mt="5">
            Volver a la tienda
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default ItemDetail;
