import React, { useState } from "react";

function ArrayList() {
  const [items, setItem] = useState([]);

  const addItem = () => {
    setItem([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 100) + 1,
      },
    ]);
  };

  return (
    <div>
      <button onClick={addItem}>ADD A Number</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}> {item.value} </li>
        ))}
      </ul>
    </div>
  );
}

export default ArrayList;
