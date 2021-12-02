import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import NavBar from "./components/Header/NavBar";
import Main from "./components/Main/Main";
import ItemList from "./components/ItemListContainer/ItemList/ItemList";

//Views
import Home from "./views/Home/Home";
import Productos from "./views/Productos/Productos";
import Remeras from "./views/Remeras/Remeras";
import ItemDetail from "./views/ItemDetailContainer/ItemDetail";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/remeras" element={<Remeras />} />
          <Route path="/:categoria/:id" element={<ItemDetail />} />
          <Route path="/:categoria/:id" element={<ItemDetail />} />
          <Route path="/productos/:categoria" element={<Productos />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
