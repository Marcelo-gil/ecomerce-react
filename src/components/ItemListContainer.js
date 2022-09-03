import React from 'react'
import '../css/main.css'
export const ItemListContainer = ({greeting}) => {
    return (
        <section style={styles.container}>
            <h2 style={styles.titulo}>{greeting}</h2>
        </section>
    )
}

const styles = {
    container:{
        position: 'sticky',
        display: 'flex',
        textAling: 'center',
    },
    
    titulo:{
        animation: "10s alternate slidein",
        fontFamily: '',
        fontStyle: 'italic',
        color: '#ff7b00',
        marginLeft: "30%",
    }
}

