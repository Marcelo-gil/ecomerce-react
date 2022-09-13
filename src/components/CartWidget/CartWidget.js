import React from 'react'
import CarritoIcon from '@mui/icons-material/ShoppingCart';

export const CartWidget = () => {
    return (
        <>
        <div style={styles.carrito}>
            <CarritoIcon style={styles.carritoIcon}/>
            <div style={styles.carritoInfo}>
                <span id="idContadorCarrito">Carrito: 0</span>
                <span id="idContadorCarrito">Total: $0.00</span>
            </div>
        </div>
        <div style={styles.borrarCarritoContainer}>
            <button style={styles.borrarCarrito} id="vaciarCarrito">Vaciar el carrito</button>
        </div>
        </>
    )
}

const styles = {
    carrito: {        
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',        
    margin: 'auto',
    marginRight: '15px',
    borderColor: 'white',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '15px',
    padding: 10,
    },
    carritoIcon: {
        paddingTop: '10',
        paddingRight: '10',
    },
    carritoInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
    },
    borrarCarritoContainer: {
        margin: 'auto',
        alignContent: 'center',
    },
    borrarCarrito: {
        borderColor: 'black',
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '15px',
    }
}
