import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import "./Producto.css";

const Producto = ({ img, name, precio }) => (
  <Card className="Producto">
    <Image src={img} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <Icon name="cart plus" size="big" />
        <span className="date"></span>
      </Card.Meta>
      <Card.Description>{precio}</Card.Description>
    </Card.Content>
  </Card>
);

export default Producto;
