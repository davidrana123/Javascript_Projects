import React from 'react'
import './App.css';
import Basics from './view/Basics_concept';
import 'bootstrap/dist/css/bootstrap.min.css';
import Apicall from "./view/Api_call"


function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Basics />
      <Apicall />
    </div>
  );
}

export default App;
