"use client"
// components/CopyButton.js
// import { FaCopy } from 'react-icons/fa';
import { MdContentCopy } from "react-icons/md";
// import React from 'react';

// const CopyButton = ({ code }) => {
//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(code);
//     alert("Code copied to clipboard!");
//   };

//   return (
//     // <button onClick={copyToClipboard}>Copy</button>
//     <button onClick={copyToClipboard} style={{ cursor: 'pointer', padding: '5px', border: 'none', background: 'none' }}> <MdContentCopy size={20} /> </button>
//   );
// };

// export default CopyButton;

// components/CopyButton.js
import React from 'react';

const CopyButton = ({ code }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard!");
  };

  return (
    <button onClick={copyToClipboard} style={copyButtonStyle}> <MdContentCopy size={20} /> Copy</button>
    // <button onClick={copyToClipboard} style={{ cursor: 'pointer', padding: '5px', border: 'none', background: 'none' }}> <MdContentCopy size={20} /> </button>
  );
};

const copyButtonStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  // backgroundColor: '#4CAF50',
  // color: 'white',
  border: 'none',
  padding: '5px 10px',
  cursor: 'pointer',
  zIndex: 1
};

export default CopyButton;

