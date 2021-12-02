import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import "./Item.css";

const Item = ({ data }) => (
  <Card color="grey">
    <Image className="ImgCard" src={data.img} wrapped ui={false} />
    <Card.Content>
      <Card.Header style={{ fontSize: 13 }}>{data.title}</Card.Header>
      <Card.Meta>
        <span className="date">Categoria: {data.categoria}</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <Icon name="cart" />
      Ver detalle
    </Card.Content>
  </Card>
);

export default Item;
