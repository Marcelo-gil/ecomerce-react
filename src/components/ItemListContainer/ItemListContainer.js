import React from 'react'
import '../../css/main.css'
import ItemCount from "../ItemCount/ItemCount";
import swal from 'sweetalert';

const ItemListContainer = ({greeting}) => {
    const onAdd = (count,tipoMensaje) => {
        swal(count, "Atencion!!", tipoMensaje);
    }
    return (
        <>
            <section style={styles.container}>
                <h2 style={styles.titulo}>{greeting}</h2>
            </section>
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </>
    )
}

const styles = {
    container:{
        position: 'sticky',
        display: 'flex',
        textAling: 'center',
    },
    
    titulo:{
        //animation: "10s alternate slidein",
        fontFamily: '',
        fontStyle: 'italic',
        color: '#ff7b00',
        marginLeft: "30%",
    }
}

export default ItemListContainer
