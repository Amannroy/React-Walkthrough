// src/App.js
import React from 'react';
import { List } from './List'; // Use curly braces to import the named export

function App() {
  const fruits = ['apple', 'banana', 'orange'];

  return (
    <div>
      <h1>List of Fruits</h1>
      <List items={fruits} />
    </div>
  );
}

export default App;
