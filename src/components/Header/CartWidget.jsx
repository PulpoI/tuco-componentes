import React from "react";
import { Button, Icon } from "semantic-ui-react";

const CartWidget = ({ name }) => (
  <div>
    <Button animated="vertical">
      <Button.Content hidden>{name}</Button.Content>
      <Button.Content visible>
        <Icon name="shop" />
      </Button.Content>
    </Button>
  </div>
);
CartWidget.defaultProps = {
  name: "Carrito",
};

export default CartWidget;
