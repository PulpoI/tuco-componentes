import React from "react";
import Main from "../../components/Main/Main";
import ItemList from "../../components/ItemListContainer/ItemList/ItemList";

import foto1 from "../../assets/image_11.jpg";
import foto2 from "../../assets/image_22.jpg";
import foto3 from "../../assets/image_44.jpg";

function Productos() {
  return (
    <div className="App">
      <Main foto1={foto1} foto2={foto2} foto3={foto3} />

      <ItemList categoria="Meme" />
      <ItemList categoria="Series" />
    </div>
  );
}

export default Productos;
