import React from 'react';
import logo from '../imagenes/logo.ico';    
import CarritoIcon from '@mui/icons-material/ShoppingCart';
const NavBar = () => {
    return(
        <header style={styles.container}>
            <img style={styles.imagen} src={logo} alt ="Logo Caramelos"/>
            <h1>El mundo de las Golosinas</h1>
            <nav style={styles.nav}>
                <li style={styles.li}><a style={styles.links} href="#">Home</a></li>
                <li style={styles.li}><a style={styles.links} href="#">Alfajores</a></li>
                <li style={styles.li}><a style={styles.links} href="#">Caramelos</a></li>
                <li style={styles.li}><a style={styles.links} href="#">Chocolates</a></li>
                <li style={styles.li}><a style={styles.links} href="#">Galletitas</a></li>
            </nav>
            <div style={styles.carrito}>
                <CarritoIcon style={styles.carritoIcon}/>
                <div style={styles.carritoInfo}>
                    <span id="idContadorCarrito">Carrito: 0</span>
                    <span id="idContadorCarrito">Total: $0.00</span>
                </div>
            </div>
        </header>
    )
}
export default NavBar

const styles = {
    container:{
        backgroundImage: 'linear-gradient(180deg, #ff7b00, yellow)',
        position: 'sticky',
        display: 'flex',
        //alingitems: 'center',
    },
    imagen:{
        width: '6%'
    },
    nav:{        
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '50%',
        margin: 'auto',
        position: 'sticky',
        alignContent: 'center',
    },
    li:{
        listStyle: 'none',
        position: 'sticky',
        alignContent: 'center',
        top: 0,
        padding: '13 15px -2',
        margin: 0,
        transition:  'transform 1s' ,
    },
    links:{
        padding : 10,
        textDecoration: 'none',
    },
    carrito: {        
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',        
        margin: 'auto',
        marginRight: '15px',
    },
    carritoIcon: {
        paddingTop: '10',
        paddingRight: '10',
    },
    carritoInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
    }
}