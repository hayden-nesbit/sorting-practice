import React from 'react';
import './App.css';
import Bubble from './Bubble'
import Insertion from './Insertion'
import Quick from './Quick'

function App() {
  return (
    <div className="container text-center p-5">
      <Bubble />
      <Insertion />
      <Quick />
    </div>
  );
}

export default App;
