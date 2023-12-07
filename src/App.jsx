import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import { ItemListContainer, Footer, NavBar, Cart, ItemDetailContainer } from "./components";

export const App = () =>{
  return(
    <BrowserRouter>
      <CssBaseline />
      <NavBar/>
        <Routes>
          <Route path="/" element={ <ItemListContainer message="Bienvenido nuevo usuario(a), esperamos que disfrute su estadia y seleccione alguno de nuestros productos."/> } />
          <Route path="/cart" element={ <Cart/>} />
          <Route path="/category/:category" element={ <ItemListContainer message={"Bienvenido nuevo usuario(a), esperamos que disfrute su estadia y seleccione alguno de nuestros productos."}/>} />
          <Route path="/item/:id" element={ <ItemDetailContainer/>} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}