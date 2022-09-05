import React from 'react';
import logo from '../imagenes/logo.png';    
import { CartWidget } from './CartWidget';
import { MenuNavBar } from './MenuNavBar';


const categorias = [
    { id: 0, nombre: 'Aridos' },
    { id: 1, nombre: 'Bolsas' },
    { id: 2, nombre: 'Hierros' },
    { id: 3, nombre: 'Ladrrillos' },
    { id: 4, nombre: 'Viguetas' },
]

const NavBar = () => {
    return(
        <header style={styles.container}>
            <img style={styles.imagen} src={logo} alt ="Logo Caramelos"/>
            <h1 style={styles.titulo}>Materiales Universo</h1>
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