import { React, useState, useContext } from "react";
import ItemCount from "../../../components/ItemCount/ItemCount";
import swal from "sweetalert";
import { Text, Stack, Box, Badge, Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../../contextnew/CartContext";
import { Carousel } from "react-carousel-minimal";

const ItemDetail = ({ item }) => {
  const navigate = useNavigate();
  const [finCompra, setFinCompra] = useState(false);
  const { addItem } = useContext(CartContext);

  const onAdd = (count) => {
    setFinCompra(true);
    addItem(item, count);
    swal(
      "Agregaste " + count + " " + item.title + " al Carrito",
      "Atencion!!",
      "success"
    );
  };

  const carouselData = item.images.map((image) => ({
    image,
  }));

  return (
    <>
      <Box
        rounded="20px"
        bg={item.stock < 1 ? "gray.700" : "gray.100"}
        mt={10}
        ml="5"
        mr="5"
      >
        <Carousel
          data={carouselData}
          thumbnailWidth="150px"
          thumbnails={true}
        />
      </Box>

      <Box
        rounded="20px"
        overflow="scroll"
        bg={item.stock < 1 ? "gray.700" : "gray.100"}
        mt={10}
        ml="5"
        mr="5"
      >
        <Stack align="center">
          <Text fontSize="1xl" mt="20%" as="b" ml="5%">
            {item.title}
          </Text>
        </Stack>
        <Stack align="center">
          <Text fontSize="2xl" mt="10%" as="b">
            ${item.price}
          </Text>
        </Stack>
        <Stack align="center">
          <Text fontSize="1xl" as="b" mt={5}>
            Que saber de nuestro producto:
          </Text>
          <Text mt="5%">{item.description}</Text>
        </Stack>
      </Box>

      <Box
        rounded="20px"
        align="center"
        mt={10}
        overflow="hidden"
        bg={item.stock < 1 ? "gray.700" : "gray.100"}
        ml="5"
        mr="5"
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
        {finCompra ? (
          <>
            <Stack align="center" mt="10">
              <Link to="/cart">
                <Button colorScheme="blackAlpha" mt="5">
                  Finalizar Compra
                </Button>
              </Link>
            </Stack>
          </>
        ) : (
          <>
            <Stack align="center" mt="20">
              <ItemCount
                stock={item.stock}
                initial={item.initial}
                onAdd={onAdd}
              />
            </Stack>
            <Stack align="center" mt="10">
              <Button
                onClick={() => navigate(-1)}
                to="/"
                colorScheme="blackAlpha"
                mt="5"
              >
                Volver a la tienda
              </Button>
            </Stack>
          </>
        )}
      </Box>
    </>
  );
};

export default ItemDetail;
