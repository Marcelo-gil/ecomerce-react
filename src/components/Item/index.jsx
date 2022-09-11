import ItemCount from "../ItemCount/ItemCount";
import swal from 'sweetalert';

const Item = ({producto}) =>{
    const onAdd = (count,tipoMensaje) => {
        swal(count, "Atencion!!", tipoMensaje);
    }
    return(
        <>
            <div style={styles.container}>
                <img src={producto.imagenArt} alt={producto.imagenArt} style={styles.imagen}/>
                <h3>{producto.nombre}</h3>
                <h4 style={styles.h4}>${producto.precio}</h4>
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
