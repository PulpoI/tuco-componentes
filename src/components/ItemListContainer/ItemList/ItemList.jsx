import React, { useEffect, useState } from "react";
import Item from "../Item/Item";

import "./ItemList.css";

const ItemList = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/meme.json")
      .then((response) => response.json())
      .then((json) => setProductos(json));
  }, []);

  return (
    <div className="GridCards">
      {productos.map((user, indice) => {
        return <Item data={user} key={indice} />;
      })}
    </div>
  );
};

export default ItemList;
