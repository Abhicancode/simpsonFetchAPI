import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://thesimpsonsquoteapi.glitch.me/quotes?count=5"
    );
    const items = await data.json();
    console.log(items);
    setItems(items);
  };

  return (
    <div>
      {items.map((item) => (
        <h1 key={uuidv4()}>
          <Link to={`/shop/${uuidv4()}`}>{item.character}</Link>{" "}
        </h1>
      ))}
    </div>
  );
}

export default Shop;
