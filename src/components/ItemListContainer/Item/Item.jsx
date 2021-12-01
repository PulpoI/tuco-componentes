import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import "./Item.css";
import ItemDetail from "../../../views/ItemDetailContainer/ItemDetail";

const Item = ({ data }) => (
  <Card>
    <Image className="ImgCard" src={data.img} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{data.title}</Card.Header>
      <Card.Meta>
        <span className="date">Categoria: {data.nombre}</span>
      </Card.Meta>
      <Card.Description>Talle: {data.id}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="user" />
        Ver detalle
      </a>
    </Card.Content>
  </Card>
);

export default Item;
