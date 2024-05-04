// App.jsx
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/HomePage/Home';
import Navbottom from './Components/Navbar/navbottom/navbottom';

function App() {

  
  return (
    <div>
      <Navbar />
      <Navbottom/>
      <div className="main-content">
      <Home />
        {/* Your main content goes here */}
       
      </div>
    </div>
  );
}

export default App;
