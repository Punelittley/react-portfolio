import React from 'react';
import './index.css'; 
import Header from './components/Header/Header';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Portfolio />
      </main>
    </div>
  );
}

export default App;