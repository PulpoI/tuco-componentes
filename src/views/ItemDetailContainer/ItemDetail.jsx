import { Card, Image, Icon, Button } from "semantic-ui-react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemCount from "../../components/ItemListContainer/ItemCount/ItemCount";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./ItemDetail.css";

function ItemDetail() {
  let id = useParams();
  let categoria = useParams();
  let productID = id.id;
  let productCate = categoria.categoria;

  const [caracter, setCaracter] = useState([]);

  useEffect(() => {
    axios(`http://localhost:5000/${productCate}/${productID}`).then((res) =>
      setCaracter(res.data)
    );
  }, [productCate, productID]);

  const addToCart = (qty) => {
    let prod;
    qty > 1 ? (prod = "productos") : (prod = "producto");
    alert(`Ingresaste ${qty} ${prod} al carrito`);
  };

  return (
    <div>
      <h1>Remera {caracter.title}</h1>

      <img src={caracter.img} alt={caracter.title} />

      <ItemCount stock={5} initial={1} onAdd={addToCart} />
      <Link to={`/productos/${productCate}`}>
        <Button animated>
          <Button.Content visible>Volver</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow left" />
          </Button.Content>
        </Button>
      </Link>
    </div>
  );
}

export default ItemDetail;
