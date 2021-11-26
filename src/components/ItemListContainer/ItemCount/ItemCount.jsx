import React, { useState } from "react";
import { Button } from "semantic-ui-react";

const ItemCount = () => {
  const [counter, setCounter] = useState(0);

  const counterUp = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h2>Producto</h2>
      <h3>{counter}</h3>
      <Button.Group>
        <Button icon="plus" onClick={counterUp} />
        <Button icon="minus" onClick={() => setCounter(counter - 1)} />
      </Button.Group>
    </div>
  );
};

export default ItemCount;
