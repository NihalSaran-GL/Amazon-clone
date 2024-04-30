// App.jsx
import React from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Components/Home';
import Navbottom from './Navbar/navbottom/navbottom';

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
