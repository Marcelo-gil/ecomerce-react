import Item from '../Item'
const ItemList = ({ misProductos }) => {
    return (
        <>

            {misProductos.map((product,i) => <Item key={`${product.sku}-${i}`} 
            producto={product}/>)}
        </>
    )
}

export default  ItemList 