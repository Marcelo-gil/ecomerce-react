import { ChakraProvider } from "@chakra-ui/react";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";
import Cart from "./containers/CartView/CartView";
import MiOrden from "./containers/Ordenes/MiOrden";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartContext";
import Navbar from "./components/Navbar/Navbar";
import CartFinCompra from "./containers/CartFinCompra/CartFinCompra";
import IngresarOrden from "./containers/Ordenes/IngresarOrden";
import NotFound from "./utils/NotFound";
import MiFooter from "./components/MiFooter/MiFooter";
const mensaje = "Tu tienda de moda online!!!";
const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <ChakraProvider>
          <Navbar />
          <Routes>
            <Route path="*" element={<NotFound />} />
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
            <Route path="/cart/confirmar" element={<CartFinCompra />} />
            <Route path="/order" element={<IngresarOrden />} />
            <Route path="/order/:id" element={<MiOrden />} />
          </Routes>
          <MiFooter />
        </ChakraProvider>
      </CartProvider>
    </BrowserRouter>
  );
};
export default App;
