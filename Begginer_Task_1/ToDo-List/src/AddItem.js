import React, { useState } from "react";

function AddItem(props) {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddItem(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddItem;
