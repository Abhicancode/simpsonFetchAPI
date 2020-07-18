import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState([]);
  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://thesimpsonsquoteapi.glitch.me/quotes?ids=${match.params.id}?count=5`
    );
    const item = await fetchItem.json();
    setItem(item);
    console.log(item);
  };

  return (
    <div>
      {item.map((char) => (
        <>
          <h1 key={uuidv4()}>{char.quote}</h1>
          <img src={char.image} alt="" />
        </>
      ))}
    </div>
  );
}

export default ItemDetail;
