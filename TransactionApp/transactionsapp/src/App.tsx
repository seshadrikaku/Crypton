import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import './App.css';
import Transaction from './Components/TransactionList';

function App() {
  return (
    <div className="App">
     <Transaction/>
    </div>
  );
}

export default App;
