import React, {useState} from 'react'
import sumarImg from '../../imagenes/sumar.png'; 
import restarImg from '../../imagenes/restar.png'; 
import fotoImg from '../../imagenes/cementoln.jpg'; 

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
        if (contador>0) {
            setContador(contador - 1);
            if (contador==1) {
                onAdd("Ya no tenes cantidad para sumar al carrito","warning");
            }else {
                onAdd("Te quedan "+(contador-1)+" para sumar al carrito","success");
            }
        } else {
            //console.log("Stock en Cero");
            onAdd("Cantidad en Cero","warning");
        }
    }

    const borrarCarrito = () => {
        setContador(0);
        onAdd("Vaciaste el Carrito","info");
    }
  
    const agregarCarrito = () => {
        if (contador!=0) {
            onAdd("Agregaste "+contador+" el Carrito","success");
        } else {
            onAdd("Debes sumar para agregar al Carrito","warning");
        }
    }

    return (
      <>
        {/* <div>ItemCount</div> */}
        <img src={fotoImg} />
        <div style={styles.container}>
            <img src={sumarImg} style={styles.imagen} onClick={sumar}/>
            <h1 style={styles.h1}>{contador}</h1>
            <img src={restarImg} style={styles.imagen} onClick={restar}/>
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