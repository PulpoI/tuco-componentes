import { Button, Header, Icon, Modal } from "semantic-ui-react";
import React, { useStatte, useEffect } from "react";
import axios from "axios";
import ItemCount from "../../components/ItemListContainer/ItemCount/ItemCount";

function ItemDetail() {
  const addToCart = (qty) => {
    let prod;
    qty > 1 ? (prod = "productos") : (prod = "producto");
    alert(`Ingresaste ${qty} ${prod} al carrito`);
  };

  return (
    <div>
      <ItemCount stock={5} initial={1} onAdd={addToCart} />
    </div>
  );
}

export default ItemDetail;
