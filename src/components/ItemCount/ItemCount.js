import React, {useState} from 'react'
import sumarImg from '../../imagenes/sumar.png'; 
import restarImg from '../../imagenes/restar.png'; 

const ItemCount = ({stock,initial,onAdd}) => {

    const [contador, setContador] = useState(initial);
    
    const sumar = () => {
        if (contador<stock) {
            setContador(contador + 1);
            onAdd("Tenes "+(contador+1)+" para sumar al carrito","success");
        } else {
            onAdd("Supera el stock","info");
        }
    }

    const restar = () => {
        if (contador>initial) {
            setContador(contador - 1);
            onAdd("Te quedan "+(contador-1)+" para sumar al carrito","success");
        }
    }

    /* const borrarCarrito = () => {
        setContador(0);
        onAdd("Vaciaste el Carrito","info");
    } */

    const agregarCarrito = () => {
        onAdd("Agregaste "+contador+" el Carrito","success");
    }

    return (
        <>
            {/* <div>ItemCount</div> */}
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
        borderRadius: '15px',
        padding: '10px',
        marginLeft: '50px',
    },
    imagen:{
        marginLeft: '30px',
    },
    h1:{
        marginLeft: '22px',
        borderRadius: '55%',
        borderColor: 'black',
        backgroundColor: 'black',
        color: 'white',
    }
}

export default ItemCount