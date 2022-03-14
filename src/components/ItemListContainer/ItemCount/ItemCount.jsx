import React, { useState } from "react";
import { Button, Icon } from "semantic-ui-react";

const ItemCount = ({ item, stock, initial, addItem }) => {
  const [qty, setQty] = useState(initial);

  const counterUp = () => {
    if (qty < stock) {
      setQty(qty + 1);
    }
  };
  const counterDown = () => {
    if (qty > 0) {
      setQty(qty - 1);
    }
  };

  return (
    <div>
      <h2>Cantidad</h2>
      <h3>{qty}</h3>
      <Button.Group>
        <Button icon="plus" onClick={counterUp} />
        <Button icon="minus" onClick={counterDown} />
      </Button.Group>
      <div>
        {qty > 0 ? (
          <Button onClick={() => addItem(item, qty)} animated="horizontal">
            <Button.Content hidden>Añadir al carrito</Button.Content>
            <Button.Content visible>
              <Icon name="shop" />
            </Button.Content>
          </Button>
        ) : (
          <Button disabled animated="horizontal">
            <Button.Content hidden>NO</Button.Content>
            <Button.Content visible>
              <Icon name="shop" />
            </Button.Content>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ItemCount;
