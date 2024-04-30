// App.jsx
import React from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Components/Home';

function App() {

  
  return (
    <div>
      <Navbar />
      <div className="main-content">
      <Home />
        {/* Your main content goes here */}
       
      </div>
    </div>
  );
}

export default App;
