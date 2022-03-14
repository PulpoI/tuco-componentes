/* eslint-disable array-callback-return */
import React, { useContext } from "react";
import { Button, Icon } from "semantic-ui-react";
import { CartContext } from "./../../context/useContext";
import { Link } from "react-router-dom";

const CartWidget = ({ name }) => {
  const { items } = useContext(CartContext);

  let itemsInCart = 0;
  items.map((item) => {
    itemsInCart = itemsInCart + item.qty;
  });

  return (
    <div>
      <Link to={"/cart"}>
        <Button animated="vertical">
          <Button.Content hidden>{name}</Button.Content>
          <Button.Content visible>
            {itemsInCart}
            <Icon name="shop" />
          </Button.Content>
        </Button>
      </Link>
    </div>
  );
};
CartWidget.defaultProps = {
  name: "Carrito",
};

export default CartWidget;
