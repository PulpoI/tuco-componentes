import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import axios from "axios";
import Spinner from "../../../components/Spinner/Spinner";
import { Link } from "react-router-dom";

import "./ItemList.css";

const ItemList = ({ categoria }) => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios(`http://localhost:5000/${categoria}`).then((res) =>
      setProductos(res.data)
    );

    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, [categoria]);

  return (
    <div>
      <div className="GridCards">
        {isLoading ? (
          <Spinner />
        ) : (
          productos.map((user, indice) => {
            return (
              <Link to={`/${user.categoria}/${user.id}`}>
                <Item data={user} key={indice} />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ItemList;
