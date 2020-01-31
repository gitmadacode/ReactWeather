import React from 'react';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
  'Lima,pe',
  'Madrid,es',
  'Tokyo,jap',
  'Buenos Aires,ar',
  'Bogota,col',
];

//this is a class component
function App() {
  return (
    <div className="App">
      <LocationList cities={cities}></LocationList>
    </div>
  );
}

export default App;
