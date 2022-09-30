import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/CartView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./CartContext";

const mensaje = "Tu tienda de moda online!!!";
const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <ChakraProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={mensaje} />} />
            <Route
              path="/category/:idCategoria"
              element={<ItemListContainer greeting={mensaje} />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </ChakraProvider>
      </CartProvider>
    </BrowserRouter>
  );
};
export default App;
