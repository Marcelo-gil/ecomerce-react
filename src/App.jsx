import { ChakraProvider } from "@chakra-ui/react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/CartView/CartView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./Context/CartContext";
import Navbar from "./components/Navbar/Navbar";
import CartFinCompra from "./components/CartFinCompra/CartFinCompra";

const mensaje = "Tu tienda de moda online!!!";
const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <ChakraProvider>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting={mensaje} />}
            />
            <Route
              path="/category/:idCategoria"
              element={<ItemListContainer greeting={mensaje} />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/form" element={<CartFinCompra/>} />
          </Routes>
        </ChakraProvider>
      </CartProvider>
    </BrowserRouter>
  );
};
export default App;
