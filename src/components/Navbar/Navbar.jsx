import { React, useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  useColorModeValue,
  Image,
  useDisclosure,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import logo from "../../imagenes/logo.png";
import { CartWidget } from "../Cart/CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import MenuNavBar from "../MenuNavBar/MenuNavBar";
import { db } from "../../firebase/firebase";
import { getDocs, collection } from "firebase/firestore";

export default function NuevoNavbar() {
  const { isOpen, onToggle } = useDisclosure();
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    const categoryCollection = collection(db, "category");
    let url = categoryCollection;
    getDocs(url)
      .then((data) => {
        const lista = data.docs.map((category) => {
          return {
            ...category.data(),
          };
        });
        setCategorias(lista);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          alignItems={"center"}
        >
          <Link to="/">
            <Image
              boxSize="50px"
              objectFit="scale-down"
              src={logo}
              alt="Logo"
            />
          </Link>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav categorias={categorias} />
          </Flex>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <>
            <Link to="/order">
              <Button>Consultar Orden</Button>
            </Link>
            <Center>
              <Link to="/cart">
                <CartWidget />
              </Link>
            </Center>
          </>
        </Stack>
      </Flex>
      {loading ? (
        <>
          <Center>
            <Spinner color="red.500" />
          </Center>
        </>
      ) : error ? (
        <h1>Ocurrio un error</h1>
      ) : (
        <Collapse in={isOpen} animateOpacity>
          <MobileNav categorias={categorias} />
        </Collapse>
      )}
    </Box>
  );
}

const DesktopNav = ({ categorias }) => {
  return (
    <Stack direction={"row"} spacing={4}>
      <MenuNavBar categorias={categorias} />
    </Stack>
  );
};

const MobileNav = ({ categorias }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      direction="column"
      display={{ md: "none" }}
    >
      {categorias.map((categoria) => (
        <MobileNavItem key={categoria.id} categoria={categoria} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ categoria }) => {
  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <NavLink
          key={categoria.id}
          to={categoria.route}
          style={({ isActive }) => {
            return {
              backgroundColor: "transparent",
              fontWeight: isActive ? 700 : 400,
            };
          }}
        >
          <Text
            fontWeight={600}
            color={useColorModeValue("gray.600", "gray.200")}
          >
            {categoria.nombre}
          </Text>
        </NavLink>
      </Flex>
    </Stack>
  );
};
