import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Screens/Home';

function App() {
  return (
    <Router>
      <main className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
