import React, { useState } from "react";
import { Button, Icon } from "semantic-ui-react";
import CartWidget from "../../Header/CartWidget";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  const counterUp = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };
  const counterDown = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <h2>Cantidad</h2>
      <h3>{counter}</h3>
      <Button.Group>
        <Button icon="plus" onClick={counterUp} />
        <Button icon="minus" onClick={counterDown} />
      </Button.Group>
      <div>
        {counter > 0 ? (
          <Button onClick={() => onAdd(counter)} animated="horizontal">
            <Button.Content hidden>AGREGAR</Button.Content>
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
