import React from 'react';
import './App.css';
import Bubble from './Bubble'
import Insertion from './Insertion'
import Quick from './Quick'

function App() {
  return (
    <div className="container text-center p-5">
      <div className="container bg-primary p-4 text-white rounded mb-3">
        <Bubble />
      </div>
      <div className="container bg-success p-4 text-white rounded mb-3">
        <Insertion />
      </div>
      <div className="container bg-warning p-4 text-white rounded">
        <Quick />
      </div>
    </div>
  );
}

export default App;
