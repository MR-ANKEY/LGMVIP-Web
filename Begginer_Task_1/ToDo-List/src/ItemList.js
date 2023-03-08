import React from "react";
import "./ItemList.css";

function ItemList(props) {
  const items = props.items;

  const handleClick = (id) => {
    props.onDeleteItem(id);
  };

  return (
    <ul className="ItemList">
      {items.map((item) => (
        <li key={item.id} className={item.added ? "added" : ""}>
          <span style={{ color: item.added ? "#28a745" : "#000" }}>
            {item.text}
          </span>
          <button onClick={() => handleClick(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
