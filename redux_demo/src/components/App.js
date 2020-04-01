import React from 'react';
import './App.css';
import FoodContainer from "../containers/food";
import FoodDetailContainer from "../containers/select-food";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <p>
          Demo Redux
        </p>
          <FoodContainer/>
          <br />
          <FoodDetailContainer/>
      </div>
    </div>
  );
}

export default App;
