import React, { Component } from "react";
import "./App.css";

// Components
import Header from "./components/Header/Header";
import Main from "./components/Main/Main"
import Producto from "./components/Producto/Producto";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Producto
          img="https://tucoremeras.store/wp-content/uploads/2021/04/DSC0245-1367x2048.jpg"
          name="Remera Uno"
          precio="$1300"
        />
        <Producto
          img="https://tucoremeras.store/wp-content/uploads/2021/04/PARAWEB2-scaled.jpg"
          name="Remera 2"
          precio="$1600"
        />
      </div>
    );
  }
}

export default App;
