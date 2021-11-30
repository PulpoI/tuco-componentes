import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// Components
import NavBar from "./components/Header/NavBar";
import Main from "./components/Main/Main";
// import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// import ItemCount from "./components/ItemListContainer/ItemCount/ItemCount";
import ItemList from "./components/ItemListContainer/ItemList/ItemList";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <ItemList />
    </div>
  );
};

export default App;
