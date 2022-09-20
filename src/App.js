import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

const mensaje = "Tu tienda de moda online!!!";
const App = () => {
  const [idProducto, setIdProducto] = useState(undefined);
  const onItemClick = (idArt) => {
    setIdProducto(idArt);
  };

  const limpiarIdProducto = () => {
    setIdProducto(undefined);
  };

  return (
    <ChakraProvider>
      <NavBar />
      {idProducto !== undefined ? (
        <ItemDetailContainer
          idProducto={idProducto}
          limpiarIdProducto={limpiarIdProducto}
        />
      ) : (
        <ItemListContainer greeting={mensaje} onItemClick={onItemClick} />
      )}
    </ChakraProvider>
  );
};
export default App;
