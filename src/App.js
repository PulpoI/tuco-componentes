import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// Components
import NavBar from "./components/Header/NavBar";
import Main from "./components/Main/Main"
import ItemListContainer from "./components/Producto/ItemListContainer";
import ItemCount from "./components/Producto/ItemCount/ItemCount"


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Main />
        <ItemListContainer
          img="https://tucoremeras.store/wp-content/uploads/2021/04/DSC0245-1367x2048.jpg"
          name="Remera Uno"
          precio="$1300"
        />
        <ItemCount />
        
      </div>
    );
  }
}

export default App;
