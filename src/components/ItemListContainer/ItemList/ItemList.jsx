import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import axios from "axios";
import Spinner from "../../../components/Spinner/Spinner";

import "./ItemList.css";

const ItemList = () => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios("http://localhost:5000/productos").then((res) =>
      setProductos(res.data)
    );
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="GridCards">
      {isLoading ? (
        <Spinner />
      ) : (
        productos.map((user, indice) => {
          return <Item data={user} key={indice} />;
        })
      )}
    </div>
  );
};

export default ItemList;
