import React from 'react';
import './index.css'; 
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Portfolio />
      </main>
    </div>
  );
}

export default App;