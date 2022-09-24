import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart  from "./components/CartView"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const mensaje = "Tu tienda de moda online!!!";
const App = () => {
  /* const [idProducto, setIdProducto] = useState(undefined);
  const onItemClick = (idArt) => {
    setIdProducto(idArt);
  }; */

  /* const limpiarIdProducto = () => {
    setIdProducto(undefined);
  }; */

  return (
    <BrowserRouter>
      <ChakraProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={mensaje} />}/>
          {/* <Route path='/category/:id' element={<ItemListContainer greeting={mensaje} onItemClick={onItemClick} />}/> */}
          <Route path='/categories/:idCategoria' element={<ItemListContainer greeting={mensaje} />}/>
          <Route path='/product/:id' element={ <ItemDetailContainer />}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>
        {/* {idProducto !== undefined ? (
          <ItemDetailContainer
            idProducto={idProducto}
            limpiarIdProducto={limpiarIdProducto}
          />
        ) : (
          <ItemListContainer greeting={mensaje} onItemClick={onItemClick} />
        )} */}
      </ChakraProvider>
    </BrowserRouter>
  );
};
export default App;
