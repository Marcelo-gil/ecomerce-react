import {React,useState, useEffect} from 'react'
import '../../css/main.css'
import ItemCount from "../ItemCount/ItemCount";
import swal from 'sweetalert';
import { useStatStyles } from '@chakra-ui/react';

const productos =[
    {id: 0,nombre: 'Bolson de Arena', sku: 1,precio: 9500,stock: 5,initial: 1,imagenArt: "../../public/arenabolson.jpg",categoria: 'aridos'}, 
    {id: 1,nombre: 'Cemento Loma Negra por 50 kg', sku: 2,precio: 1450,stock: 2,initial: 1,imagenArt: "../../public/cementoln.jpg",categoria: 'bolsas'},
    {id: 2,nombre: 'Varilla de Hierro 6"', sku: 3,precio: 526,stock: 7,initial: 1,imagenArt: "../../public/hierro6.jpg",categoria: 'hierros'}, 
    {id: 3,nombre: 'Huecos 12X18X33 (6 Tubos)', sku: 4,precio: 110,stock: 4,initial: 1,imagenArt: "../../public/hueco121833x6.jpg",categoria: 'ladrillos'}, 
    {id: 4,nombre: 'Vigueta de Cemento X 1,00 mts', sku: 5,precio: 620,stock: 2,initial: 1,imagenArt: "../../public/vigueta1mt.jpg",categoria: 'viguetas'},
    {id: 5,nombre: 'Piedra Partida por Metro', sku: 6,precio: 10000,stock: 7,initial: 1,imagenArt: "../../public/piedrapartidabolson.jpg",categoria: 'aridos'}, 
    {id: 6,nombre: 'Cal cacique Max por 30 kg', sku: 7,precio: 959,stock: 8,initial: 1,imagenArt: "../../public/calcasiquemax30.jpg",categoria: 'bolsas'},
    {id: 7,nombre: 'Varilla de Hierro 8"', sku: 8,precio: 604,stock: 10,initial: 1,imagenArt: "../../public/hierro8.jpg",categoria: 'hierros'},
    {id: 8,nombre: 'Huecos 12X18X33 (9 Tubos)', sku: 9,precio: 110,stock: 8,initial: 1,imagenArt: "../../public/hueco121833x9.jpg",categoria: 'ladrillos'}, 
    {id: 9,nombre: 'Vigueta de Cemento X 2,20 mts', sku: 10,precio: 1762,stock: 4,initial: 1,imagenArt: "../../public/vigueta220mt.jpg",categoria: 'viguetas'} 
];
const promesa = new Promise((res,rej) =>{
    setTimeout(() => {
        res(productos)
    },2000)
})
    
const ItemListContainer = ({greeting}) => {

    const [listadoProductos, setListadoProductos] = useState([]);

    useEffect(() => {
        promesa
        .then((data)=>{setListadoProductos(data)
        console.log(data)
        })
        .catch(()=>{console.log("No se cumplio la promesa")})
    }, [])

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
