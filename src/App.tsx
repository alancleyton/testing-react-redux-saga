import './App.css';
import React, { type ReactElement } from 'react';

function App(): ReactElement {
  return (
    <div id="App">
      <h1 data-testid="title" className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  );
}

export default App;
