
const getProducto = (item) => {
  const xstock = Math.floor(Math.random() * (10 - 2) + 2);
  return {
      id: item.id,
      nombre: item.title.toUpperCase(),
      sku: item.id,
      precio: item.price,
      stock: xstock,
      initial: 1,
      oferta: false,
      imagenMeli: true,
      novedad: false,
      imagenArt: item.images,
      rating: item.rating,
      category: item.category.id,
      descripcion: item.description,    
  }
}

export { getProducto }