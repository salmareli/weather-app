import React from 'react';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
  "Morelia, mx",
  "Madrid, es",
  "California, us"
];

function App() {
  return (
    <div className="App">
      <LocationList cities={ cities }> </LocationList>
    </div>
  );
}

export default App;
