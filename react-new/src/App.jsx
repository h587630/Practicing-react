import './App.css';
import Tabs from './components/Tabs.jsx';
import CoreConcepts from './components/CoreConsepts.jsx';


import { useState } from 'react';  // Corrected import for useState


const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  return (
    <header className='header'>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[genRandomInt(reactDescriptions.length - 1)]} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}




function App() {
  return (
    <div>
      <main>
        <section>
          <Header />
          <h2 className='text'>Time to get started!</h2>
        </section>
       <CoreConcepts/>

        <section>
          <Tabs/>
        </section>
      </main>
    </div>
  );
}

export default App;
