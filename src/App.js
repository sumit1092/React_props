import React from 'react'
import "./App.css";
import Card from './Card';
import Title from './Title';
import Name from './Name';

function App() {
  return (
    <div className='App'>

      <h1>Task: Add three Card elements</h1>
      <Title para = "React Props"/>
      <Card h2="First card is h2" h3="First card is h3"/>
      <Card h2="Second card is h2" h3="Second card is h3"/>
      <Card h2="Third card is h2" h3="Third card is h3"/>
      <Name naam ="Bond007"/>
    </div>
  );
};

export default App;
