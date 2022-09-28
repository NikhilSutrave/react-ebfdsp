import React, { useState } from 'react';

const App1 = () => {
  const [showText, setShowText] = useState(false);
  const [textColor, setTextColor] = useState('black');
  return (
    <>
      <button onClick={() => setShowText(!showText)}>
        {showText ? 'Hide' : 'show'}
      </button>
      <button
        onClick={() => setTextColor(textColor === 'black' ? 'green' : 'black')}
      >
        Color
      </button>
      {showText && (
        <h1 style={{ color: textColor }}>My name is Nikhil Sutrave</h1>
      )}
    </>
  );
};

export default App1;
