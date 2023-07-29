// src/List.js
import React from 'react';

function List(props) {
  const listItems = props.items.map((item) => (
    <li key={item}>{item}</li>
  ));

  return <ul>{listItems}</ul>;
}

export { List }; // Named export instead of default export
