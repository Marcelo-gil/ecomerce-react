import react from "react";
import NavBar from "./components/Navbar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
const mensaje = "Tus Materiales en un solo lugar al mejor Precio!!!"
const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={mensaje} />
  </>
  )
}
export default App

