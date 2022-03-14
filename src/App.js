import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import NavBar from "./components/Header/NavBar";

//Views
import Home from "./views/Home/Home";
import Productos from "./views/Productos/Productos";
import Remeras from "./views/Remeras/Remeras";
import ItemDetail from "./views/ItemDetailContainer/ItemDetail";
import { CartProvider } from "./context/useContext";
import Cart from "./views/Cart/Cart";

const App = () => {
  return (
    <>
      <CartProvider>
        <Router>
          <div className="App">
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/remeras" element={<Remeras />} />
              <Route path="/:categoria/:id" element={<ItemDetail />} />

              <Route
                path="/productos/Series"
                element={<Productos cat="Series" />}
              />
              <Route
                path="/productos/Memes"
                element={<Productos cat="Memes" />}
              />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </>
  );
};

export default App;
