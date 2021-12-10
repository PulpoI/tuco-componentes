import { Card, Image, Icon, Button } from "semantic-ui-react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemCount from "../../components/ItemListContainer/ItemCount/ItemCount";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./ItemDetail.css";

function ItemDetail({ item }) {
  let id = useParams();
  let categoria = useParams();
  let productID = id.id;
  let productCate = categoria.categoria;

  const [caracter, setCaracter] = useState([]);
  const [add, setAdd] = useState(false);

  useEffect(() => {
    axios(`http://localhost:5000/${productCate}/${productID}`).then((res) =>
      setCaracter(res.data)
    );
  }, [productCate, productID]);

  const onAdd = () => {
    setAdd(!add);
  };

  return (
    <div>
      <h1>Remera {caracter.title}</h1>

      <img src={caracter.img} alt={caracter.title} />
      {add ? (
        <Button.Content visible>¡Agregado al carrito!</Button.Content>
      ) : (
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
      )}
      <Link to="/cart">
        <Button animated>
          <Button.Content visible>Finalizar Compra</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
      </Link>
    </div>
  );
}

export default ItemDetail;
