import React, {useState} from 'react'
import sumarImg from '../../imagenes/sumar.png'; 
import restarImg from '../../imagenes/restar.png'; 

const ItemCount = ({stock,initial,onAdd}) => {

    const [contador, setContador] = useState(initial);
    
    const sumar = () => {
        if (contador<stock) {
            setContador(contador + 1);
        }
    }

    const restar = () => {
        if (contador>initial) {
            setContador(contador - 1);
        }
    }

    const agregarCarrito = () => {
        /* chequeo Contador por si initial viene con valor 0 */
        if (contador>0) {
            onAdd(contador);
        }
    }

    return (
        <>
            <div style={styles.container}>
                <img src={sumarImg} style={styles.imagen} alt="sumar" onClick={sumar}/>
                <h1 style={styles.h1}>{contador}</h1>
                <img src={restarImg} style={styles.imagen} alt="restar" onClick={restar}/>
            </div>
            <button style={styles.agregarCarrito} onClick={agregarCarrito}>agregar al carrito</button>
        </>
    )
}

const styles = {
    container:{
        display: 'flex',
        textAling: 'center',

    },
    agregarCarrito: {
        borderColor: 'black',
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '10px',
        padding: '5px',
        marginLeft: '16%',
    },
    imagen:{
        marginLeft: '10%',
    },
    h1:{
        marginLeft: '22px',
        borderRadius: '45%',
        padding: '8px',
        borderColor: 'black',
        backgroundColor: 'black',
        color: 'white',
    }
}

export default ItemCount