import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <h1>My React and Typescript App!</h1>
);

/*
  Element id "root" must be the same value of index.html's top level div
*/
ReactDOM.render(
  <App />,
  document.getElementById("root")
);

// Handy way to avoid the isolatedModules error
export {}
