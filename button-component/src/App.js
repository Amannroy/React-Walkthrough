// src/App.js
import React from 'react';
import Button from './Button';

function App() {
  const handleButtonClick = () => {
    console.log("Button clicked");
  };

  return (
    <div>
      <h1>Button Component</h1>
      <Button text="Click me!" onClick={handleButtonClick} />
    </div>
  );
}

export default App;
