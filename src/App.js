import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setIsVisible((prev) => !prev)}>
        {isVisible === true ? 'Hide' : 'Show'}
      </button>
      {/* <button onClick={()=>setIsVisible(!isVisible)}>
        {isVisible ? " Hide" : "Show"}
      </button> */}
      {isVisible && <h1>Hidden Text</h1>}

    </div>
  );
}
