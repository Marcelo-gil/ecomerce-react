import { ChakraProvider } from '@chakra-ui/react'

import NavBar from "./components/Navbar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

const mensaje = "Tus Materiales en un solo lugar al mejor Precio!!!"
const App = () => {
  return (
    <ChakraProvider>
        <NavBar />
        <ItemListContainer greeting={mensaje} />    
    </ChakraProvider>
  )
}
export default App

