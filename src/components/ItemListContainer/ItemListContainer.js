import {React , useState , useEffect} from 'react'
import '../../css/main.css'
import ItemList from "../ItemList";
import { Spinner , Text } from '@chakra-ui/react';

const productos =[
    {id: 0,nombre: 'Bolson de Arena', sku: 1,precio: 9500,stock: 2,initial: 1,imagenArt: "./arenabolson.jpg",categoria: 'aridos'}, 
    {id: 6,nombre: 'Cal cacique Max x 30 kg', sku: 2,precio: 959,stock: 8,initial: 1,imagenArt: "./calcasiquemax30.jpg",categoria: 'bolsas'},
    {id: 1,nombre: 'Cemento Loma Negra x 50 kg', sku: 3,precio: 1450,stock: 2,initial: 1,imagenArt: "./cementoln.jpg",categoria: 'bolsas'},
    {id: 3,nombre: 'Huecos 12X18X33 (6 Tubos)', sku: 4,precio: 110,stock: 4,initial: 1,imagenArt: "./hueco121833x6.jpg",categoria: 'ladrillos'}, 
    {id: 8,nombre: 'Huecos 12X18X33 (9 Tubos)', sku: 5,precio: 110,stock: 8,initial: 1,imagenArt: "./hueco121833x9.jpg",categoria: 'ladrillos'}, 
    {id: 5,nombre: 'Piedra Partida por Metro', sku: 6,precio: 10000,stock: 7,initial: 1,imagenArt: "./piedrapartidabolson.jpg",categoria: 'aridos'}, 
    {id: 2,nombre: 'Varilla de Hierro 6"', sku: 7,precio: 526,stock: 7,initial: 1,imagenArt: "./hierro6.jpg",categoria: 'hierros'}, 
    {id: 7,nombre: 'Varilla de Hierro 8"', sku: 8,precio: 604,stock: 10,initial: 1,imagenArt: "./hierro8.jpg",categoria: 'hierros'},
    {id: 4,nombre: 'Vigueta de Cemento X 1,00 mt', sku: 9,precio: 620,stock: 2,initial: 1,imagenArt: "./vigueta1mt.jpg",categoria: 'viguetas'},
    {id: 9,nombre: 'Vigueta de Cemento X 2,20 mt', sku: 10,precio: 1762,stock: 4,initial: 1,imagenArt: "./vigueta220mt.jpg",categoria: 'viguetas'} 
];
const promesa = new Promise((res,rej) =>{
    setTimeout(() => {
        res(productos)
    },2000)
})
    
const ItemListContainer = ({greeting}) => {

    const [misProductos, setListadoProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        promesa
        .then((res)=>{
            setLoading(false)
            setListadoProductos(res)
        })
        .catch(()=>{console.log("No se cumplio la promesa")})
    }, [])

    return (
        <>
            <section style={styles.container}>
                <Text fontSize='2xl' style={styles.titulo}>{greeting}</Text>
            </section>
            <article style={styles.gridCards}>
                {loading  ?
                    <Spinner  color='red.500'/>
                : 
                    <ItemList misProductos={misProductos} />
                }
            </article>
        </>
    )
}

const styles = {
    container:{
        display: 'flex',
        justifyContent: 'space-evenly',
        textAling: 'center',
    
    },

    gridCards: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr'
    },
    imagen:{
        width: '50%',
        height: '50%',
        marginLeft: '580px',
    },
    titulo:{
        fontFamily: '',
        fontStyle: 'italic',
        color: '#ff7b00',
    }
}

export default ItemListContainer
