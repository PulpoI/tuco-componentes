import { Card, Image, Icon, Button } from "semantic-ui-react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemCount from "../../components/ItemListContainer/ItemCount/ItemCount";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function ItemDetail() {
  let id = useParams();
  let productID = id.id;

  const [caracter, setCaracter] = useState([]);

  useEffect(() => {
    axios(`http://localhost:5000/productos/${productID}`).then((res) =>
      setCaracter(res.data)
    );
  }, [productID]);
  console.log(caracter);

  const addToCart = (qty) => {
    let prod;
    qty > 1 ? (prod = "productos") : (prod = "producto");
    alert(`Ingresaste ${qty} ${prod} al carrito`);
  };

  return (
    <div>
      <h1>DETALLES</h1>

      <Card>
        <Image src={caracter.img} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{caracter.title}</Card.Header>
          <Card.Meta>
            <span className="date">Categoria: {caracter.nombre}</span>
          </Card.Meta>
          <Card.Description>Talle: {caracter.id}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name="user" />
          Ver detalle
        </Card.Content>
      </Card>

      <ItemCount stock={5} initial={1} onAdd={addToCart} />
      <Link to="/productos">
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
