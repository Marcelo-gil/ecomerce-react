import React, { useState, useContext } from "react";
import {
  Text,
  Box,
  Stack,
  Button,
  FormErrorMessage,
  Spinner,
} from "@chakra-ui/react";
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
  const [loading, setLoading] = useState(false);
  const [datosComprador, setDatosComprador] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    telefono: "",
    email: "",
    email2: "",
  });

  const asignaInput = (event) => {
    setDatosComprador({
      ...datosComprador,
      [event.target.name]: event.target.value,
    });
  };

  /**
   * Controla el stock y confirma la compra utilizando una transacción para
   * garantizar la atomicidad de la operación.
   *
   * Las operaciones de lectura deben ocurrir antes de cualquiera de escritura
   */
  const guardarCompra = async () => {
    setLoading(true);
    const nuevoId = await runTransaction(db, async (transaction) => {
      const prodDocs = [];
      for (const item of carrito) {
        const { cantidad, producto } = item;
        const productoRef = doc(db, "productos", producto.id);
        const productoDoc = await transaction.get(productoRef);
        if (!productoDoc.exists()) {
          throw new Error("El Producto No existe!");
        }
        prodDocs.push({
          productoRef,
          stock: productoDoc.data().stock,
          cantidad,
        });
      }

      for (const doc of prodDocs) {
        if (doc.stock >= doc.cantidad) {
          transaction.update(doc.productoRef, {
            stock: doc.stock - doc.cantidad,
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
        setLoading(false);
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
        setLoading(false);
      });
  };

  const validations = {
    nombre: datosComprador.nombre.trim() !== "",
    apellido: datosComprador.apellido.trim() !== "",
    dni:
      datosComprador.dni.length !== 0 &&
      !isNaN(datosComprador.dni) &&
      datosComprador.dni.length > 6,
    telefono: datosComprador.telefono.trim() !== "",
    email:
      datosComprador.email.trim() !== "" && datosComprador.email.includes("@"),
    email2: datosComprador.email.trim() === datosComprador.email2.trim(),
  };

  const botonDeshabilitado =
    !validations.nombre ||
    !validations.apellido ||
    !validations.telefono ||
    !validations.email ||
    !validations.dni ||
    !validations.email2;

  return totalCarrito !== 0 ? (
    loading ? (
      <>
        <Center>
          <Spinner color="red.500" />
        </Center>
      </>
    ) : (
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
              <FormControl isRequired isInvalid={!validations.nombre}>
                <FormLabel fontSize="sm">Nombre</FormLabel>
                <Input
                  type="name"
                  placeholder="Nombre"
                  fontSize="sm"
                  className="form"
                  name="nombre"
                  onChange={asignaInput}
                ></Input>
                <FormErrorMessage>Ingresá un nombre.</FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={!validations.apellido}>
                <FormLabel fontSize="sm">Apellido</FormLabel>
                <Input
                  type="text"
                  placeholder="Apellido"
                  className="form"
                  name="apellido"
                  onChange={asignaInput}
                ></Input>
                <FormErrorMessage>Ingresá un apellido.</FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={!validations.dni}>
                <FormLabel fontSize="sm">Dni</FormLabel>
                <Input
                  type="Number"
                  placeholder="Dni"
                  className="form"
                  name="dni"
                  onChange={asignaInput}
                ></Input>
                <FormErrorMessage>Ingresá un DNI válido</FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={!validations.telefono}>
                <FormLabel fontSize="sm">Telefono</FormLabel>
                <Input
                  type="tel"
                  placeholder="Telefono"
                  name="telefono"
                  onChange={asignaInput}
                />
                <FormErrorMessage>Ingresá un teléfono válido</FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={!validations.email}>
                <FormLabel fontSize="sm">Email</FormLabel>
                <Input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={asignaInput}
                />
                <FormErrorMessage>Ingresá un email válido</FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={!validations.email2}>
                <FormLabel fontSize="sm">Reingresar Email</FormLabel>
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
                
              >
                Cancelar
              </Button>
              <Button
                ml="5"
                mt="5"
                colorScheme="blackAlpha"
                type="Submit"
                className="button"
                disabled={botonDeshabilitado}
                onClick={finalizarCompra}
              >
                Comprar
              </Button>
            </Center>
          </Box>
        </Center>
      </>
    )
  ) : (
    <Navigate to={"/"} />
  );
};

export default CartFinCompra;
