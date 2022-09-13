import ItemCount from "../ItemCount/ItemCount";
import swal from 'sweetalert';
import { Text } from '@chakra-ui/react';

const Item = ({producto}) =>{
    const onAdd = (count) => {
        swal("Agregaste " + count + " " + producto.nombre + " al Carrito", "Atencion!!","success");
    }
    return(
        <>
            <div style={styles.container}>
                <img src={producto.imagenArt} alt={producto.imagenArt} style={styles.imagen}/>
                <Text fontSize='2xl'>{producto.nombre}</Text>
                <Text fontSize='2xl' style={styles.h4}>${producto.precio}</Text>
                <ItemCount stock={producto.stock} initial={producto.initial} onAdd={onAdd}/>
            </div>
        </>
    )
}
const styles = {
    container:{
        textAling: 'center',
        marginLeft: '30px',
    },
    h4: {
        marginLeft: '25%',
    },
    imagen:{
        width: '75%',
        height: '50%',
    },
}
export default Item
