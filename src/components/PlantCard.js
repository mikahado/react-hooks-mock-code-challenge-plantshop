import React, {useState} from "react";

function PlantCard({plant}) {
  const {id, name, image, price} = plant

  const [isInStock, setIsInStock] = useState(true)

  function handleStockClick() {
    setIsInStock((isInStock) => !isInStock)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button onClick={handleStockClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleStockClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
