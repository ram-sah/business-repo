import React from 'react';
import './App.css';
import Typical from 'react-typical';

function Animate() {
  return (
    <div className="Animate">
      <header className="App-header">
        
        <h2>
        I' am a{" "}
        <Typical
          loop={Infinity}
          wrapper='b'
          steps={[
            'FULL STACK WEB DEVELOPER',
            1000,
            'Web Designer',
            1000
          ]}
        />
      </h2>
      </header>
    </div>
  );
}

export default Animate;
