import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Screens/Home';
import Header from './Components/Header/Header';

function App() {
  return (
    <Router>
      <main className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
