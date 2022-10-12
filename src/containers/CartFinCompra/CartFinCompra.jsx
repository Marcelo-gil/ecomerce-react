import React, { useState, useContext } from "react";
import { Text, Box, Stack, Button, FormErrorMessage } from "@chakra-ui/react";
import { FormControl, FormLabel, Input, Center } from "@chakra-ui/react";
import { useNavigate, Navigate } from "react-router-dom";
import swal from "sweetalert";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/firebase";
import {
  collection,
  serverTimestamp,
  runTransaction,
  doc,
} from "firebase/firestore";

const CartFinCompra = () => {
  const { totalCarrito, carrito, clear } = useContext(CartContext);
  const navigate = useNavigate();
  const [datosComprador, setDatosComprador] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    telefono: "",
    email: "",
  });

  const asignaInput = (event) => {
    setDatosComprador({
      ...datosComprador,
      [event.target.name]: event.target.value,
    });
  };

  /**
   *  Controla el stock y confirma la compra utilizando una transacción para
   *  garantizar la atomicidad de la operación
   */
  const guardarCompra = async () => {
    const nuevoId = await runTransaction(db, async (transaction) => {
      for (const item of carrito) {
        const { cantidad, producto } = item;
        const productoRef = doc(db, "productos", producto.id);
        const productoDoc = await transaction.get(productoRef);
        if (!productoDoc.exists()) {
          throw new Error("El Producto No existe!");
        }
        if (productoDoc.data().stock >= cantidad) {
          transaction.update(productoRef, {
            stock: productoDoc.data().stock - cantidad,
          });
        } else {
          throw new Error("No Hay Stock!");
        }
      }

      const ventasCollection = collection(db, "ventas");
      const nuevaVentaDoc = doc(ventasCollection);
      transaction.set(nuevaVentaDoc, {
        comprador: datosComprador,
        items: carrito,
        date: serverTimestamp(),
        total: totalCarrito,
      });

      return nuevaVentaDoc.id;
    });

    return { id: nuevoId };
  };

  const finalizarCompra = (e) => {
    guardarCompra()
      .then((result) => {
        swal({
          title: "Su compra fue un Exito",
          text:
            "Estimado " +
            datosComprador.nombre +
            " tu numero de Verificación es " +
            result.id,
          icon: "success",
          button: "Tomé Nota!",
          closeOnClickOutside: false,
          closeOnEsc: false,
        }).then(() => {
          clear();
          navigate("/");
        });
      })
      .catch((e) => {
        swal("Error finalizando la compra!", e.message, "error");
      });
  };

  return totalCarrito !== 0 ? (
    <>
      <Center>
        <Box
          w="50%"
          bg="#E6FFFA"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <Center>
            <Text fontWeight="bold" fontSize="2xl">
              Ingresa tus Datos
            </Text>
          </Center>
          <Stack>
            <FormControl
              isRequired
              isInvalid={datosComprador.nombre.trim() === ""}
            >
              <FormLabel>Nombre</FormLabel>
              <Input
                type="name"
                placeholder="Nombre"
                className="form"
                name="nombre"
                onChange={asignaInput}
              ></Input>
              <FormErrorMessage>Ingresá un nombre.</FormErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={datosComprador.apellido.trim() === ""}
            >
              <FormLabel>Apellido</FormLabel>
              <Input
                type="text"
                placeholder="Apellido"
                className="form"
                name="apellido"
                onChange={asignaInput}
              ></Input>
              <FormErrorMessage>Ingresá un apellido.</FormErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={datosComprador.dni.trim() === ""}
            >
              <FormLabel>Dni</FormLabel>
              <Input
                type="Number"
                placeholder="Dni"
                className="form"
                name="dni"
                onChange={asignaInput}
              ></Input>
              <FormErrorMessage>Ingresá un DNI válido</FormErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={datosComprador.telefono.trim() === ""}
            >
              <FormLabel>Telefono</FormLabel>
              <Input
                type="tel"
                placeholder="Telefono"
                name="telefono"
                onChange={asignaInput}
              />
              <FormErrorMessage>Ingresá un teléfono válido</FormErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={datosComprador.email.trim() === ""}
            >
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Email"
                name="email"
                onChange={asignaInput}
              />
              <FormErrorMessage>Ingresá un email válido</FormErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={datosComprador.email.trim() === ""}
            >
              <FormLabel>Reingresar Email</FormLabel>
              <Input
                type="email"
                placeholder="Email"
                name="email2"
                onChange={asignaInput}
              />
              <FormErrorMessage>Los email no coinciden.</FormErrorMessage>
            </FormControl>
          </Stack>
          <Center>
            <Button
              onClick={() => navigate(-1)}
              to="/"
              colorScheme="blackAlpha"
              mt="5"
              ml="5"
              w="160px"
            >
              Cancelar
            </Button>
            <Button
              ml="5"
              mt="5"
              colorScheme="blackAlpha"
              type="Submit"
              className="button"
              onClick={finalizarCompra}
            >
              Finalizar Compra
            </Button>
          </Center>
        </Box>
      </Center>
    </>
  ) : (
    <Navigate to={"/"} />
  );
};

export default CartFinCompra;
