import React from 'react';
import logo from '../../imagenes/logo.png';    
import { CartWidget } from '../CartWidget/CartWidget';
import MenuNavBar from './MenuNavBar';
import { Text } from '@chakra-ui/react'

const categorias = [
    { id: 0, nombre: "Men's clothing" },
    { id: 1, nombre: 'Jewelery' },
    { id: 2, nombre: 'Electronics' },
    { id: 3, nombre: "Women's clothing" },
]

const NavBar = () => {
    return(
        <header style={styles.container}>
            <img style={styles.imagen} src={logo} alt ="Logo"/>
            <Text fontSize='4xl' style={styles.titulo}>Fake Store</Text>
            <MenuNavBar categorias={categorias}/>
            <CartWidget />
        </header>
    )
}

const styles = {
    container:{
        backgroundImage: 'linear-gradient(180deg, #ff7b00, yellow)',
        position: 'sticky',
        display: 'flex',
    },
    titulo: {
        marginLeft: 10,
        color: 'white',
    },
    imagen:{
        width: '6%'
    },
}

export default NavBar