import Item from "../Item/Item";

const ItemList = ({ misProductos, onItemClick }) => {
  return (
    <>
      {misProductos.map((product, i) => (
        <Item
          key={`${product.id}-${i}`}
          producto={product}
          onItemClick={onItemClick}
        />
      ))}
    </>
  );
};

export default ItemList;
