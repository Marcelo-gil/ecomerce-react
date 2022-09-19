import Item from '../Item'

const ItemList = ({ misProductos, onItemClick }) => {
    return (
        <>
            {misProductos.map((product,i) => 
                <Item 
                    key={`${product.sku}-${i}`} 
                    producto={product}
                    onItemClick={onItemClick}
                />
            )}
        </>
    )
}

export default  ItemList 