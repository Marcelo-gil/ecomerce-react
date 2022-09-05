import React from 'react'

const MenuNavBar = ({ categorias}) => {
    return (
        <nav style={styles.nav}>
            <a style={styles.links} href="#">Home</a>

            {categorias.map((categoria) => {
                return <a key={categoria.id} style={styles.links} href=''>{categoria.nombre}</a>
            })}
        </nav>
    )
}

const styles = {
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
}
export default MenuNavBar