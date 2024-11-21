"use client"
// components/CodeBlock.js
// import React from 'react';
// import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
// import * as hljs from 'react-syntax-highlighter/dist/esm/languages/hljs';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
// import CopyButton from './CopyButton';

// // Registering all the languages
// const languages = ['javascript', 'python', 'cpp', 'java']; // add other languages as needed
// languages.forEach(lang => {
//   SyntaxHighlighter.registerLanguage(lang, hljs[lang]);
// });

// const CodeBlock = ({ language, code }) => (
//   <div style={{ position: 'relative' }}>
//     <SyntaxHighlighter  language={language} style={docco}>
//         {code}
//     </SyntaxHighlighter>
//     <CopyButton code={code} />
//   </div>
// );

// export default CodeBlock;

// components/CodeBlock.js
import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as hljs from 'react-syntax-highlighter/dist/esm/languages/hljs';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CopyButton from './CopyButton';

// Registering all the languages
const languages = ['javascript', 'python', 'cpp', 'java']; // add other languages as needed
languages.forEach(lang => {
  if (hljs[lang]) {
    SyntaxHighlighter.registerLanguage(lang, hljs[lang]);
  }
});

const CodeBlock = ({ language, code }) => (
  <div style={{ position: 'relative', padding: '20px',fontSize:'18px', border: '2px solid #ddd', borderRadius: '5px' }}>
    <CopyButton code={code} />
    <SyntaxHighlighter language={language} style={docco}>
      {code}
    </SyntaxHighlighter>
  </div>
);

export default CodeBlock;

