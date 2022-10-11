import React, { useState, useContext } from 'react'
import { Text, Box, Stack, Button } from "@chakra-ui/react";
import {
    FormControl,
    FormLabel,
    Input,
    Center,
  } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import { CartContext } from '../../Context/CartContext';
import { db } from "../../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
/* import { doc, updateDoc } from "firebase/firestore" */

const CartFinCompra = () => {
    const { totalCarrito, carrito,  clear } = useContext(CartContext);
    const navigate = useNavigate();

    const [datosComprador, setDatosComprador] = useState({
        nombre: "",
        apellido: "",
        dni: "",
        telefono: "",
        email: "",
        NombreTarjeta: "",
        NumeroTarjeta: "",
      });

     /* ========== Suspendido hasta desarrollar control de stock ========*/
     /* const actualizarStock = () =>{
        const updateStock = doc(db, "products", "Uh9qa5rZhfhAgnugRQAx");
        updateDoc(updateStock,{stock:50});
      }  */

      const asignaInput = (event) => {
        setDatosComprador({
            ...datosComprador,
            [event.target.name] : event.target.value
        })
     }

    const cerrarCompra = (e) => {
        const ventasCollection = collection(db, "ventas");
        
        addDoc(ventasCollection, {
            comprador: datosComprador,
            items: carrito,
            date: serverTimestamp(),
            total: totalCarrito,
        })
            .then(result => {
                swal({
                    title: "Su compra fue un Exito",
                    text: "Estimado " + datosComprador.Name + " Su numero de Verificación es " + result.id ,
                    icon: "success",
                    button: "Tome Nota!",
                  });
                clear()
            })
            .catch(e => {
                console.log('Error en la transacción')
            })
    }


    return (
        <FormControl>
            <Center>
            <Box w='50%' bg="#E6FFFA" borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <Center>
                    <Text fontWeight="bold" fontSize='2xl'>Ingresa tus Datos</Text>
                </Center>
                   <Stack>
                        <FormLabel>Nombre</FormLabel>
                        <Input type="name" placeholder="Nombre" className="form" name="nombre" onChange={asignaInput}></Input>
                        <FormLabel>Apellido</FormLabel>
                        <Input type="text" placeholder="Apellido" className="form" name="apellido" onChange={asignaInput}></Input>
                        <FormLabel>Dni</FormLabel>
                        <Input type="Number" placeholder="Dni" className="form" name="dni" onChange={asignaInput}></Input>
                        <FormLabel>Telefono</FormLabel>
                        <Input type='tel' placeholder="Telefono" name="telefono" onChange={asignaInput}/>
                        <FormLabel>Email</FormLabel>
                        <Input type='email' placeholder="Email" name="email" onChange={asignaInput}/>
                        <FormLabel>Tarjeta de Credito</FormLabel>
                        <Input type="Text" placeholder="Nombre de Tarjeta" className="form" name="NombreTarjeta" onChange={asignaInput}></Input>
                        <FormLabel>Numero de Tarjeta de Credito</FormLabel>
                        <Input type="Number" placeholder="Numero Tarjeta" className="form" name="NumeroTarjeta" onChange={asignaInput}></Input>
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
                   <Link to="/">
                    <Button ml="5" mt="5" colorScheme="blackAlpha" type="Submit" className="button" onClick={cerrarCompra}>Finalizar Compra</Button>
                   </Link>
                </Center>
            </Box>
            </Center>
        </FormControl>
    )

}

export default CartFinCompra