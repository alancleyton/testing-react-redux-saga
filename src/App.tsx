import './App.css';
import React, { type ReactElement } from 'react';
import { Provider } from 'react-redux';
import store from './store/config/store';

import Counter from './components/counter';

function App(): ReactElement {
  return (
    <Provider store={store}>
      <div id="App">
        <h1 data-testid="title" className="text-3xl font-bold underline">
          Hello world!
        </h1>

        <Counter />
      </div>
    </Provider>
  );
}

export default App;
