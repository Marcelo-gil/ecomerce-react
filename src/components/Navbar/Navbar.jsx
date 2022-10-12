import React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  useColorModeValue,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import logo from "../../imagenes/logo.png";
import { CartWidget } from "../Cart/CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import MenuNavBar from "../MenuNavBar/MenuNavBar";

const categorias = [
  { id: 1, nombre: "Electronics", route: "/category/electronics" },
  { id: 2, nombre: "Jewelery", route: "/category/jewelery" },
  { id: 3, nombre: "Men's clothing", route: "/category/mens_clothing" },
  { id: 4, nombre: "Women's clothing", route: "/category/womens_clothing" },
];

export default function NuevoNavbar() {
  const { isOpen, onToggle } = useDisclosure();
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
            <DesktopNav />
          </Flex>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Link to="/cart">
            <CartWidget />
          </Link>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      <MenuNavBar categorias={categorias} />
    </Stack>
  );
};

const MobileNav = () => {
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
        <NavLink key={categoria.id} to={categoria.route}>
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
