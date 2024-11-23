// pages/css-tutorial.js
import React from 'react';
import CodeBlock from '../components/CodeBlock';

const css = [
    { 
        title: 'How to write a css code ', 
        explanation: `First create a html file like "index.html",and create a css file like "index.css",and add css file in head tag of html code as given below in link tag`, 
        language: 'html', 
        code: `<!DOCTYPE html>
  <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="index.css" />              // in href give path of your css file
  </head>
    <body>
    <p class="para" id='para1'>hello world</p>
    <div>hello div</div>
  </body>
  </html>` 
      },
    { 
    title: 'CSS Selectors', 
    explanation: 'Selectors are used to target the HTML elements you want to style. Here are some common types of selectors:', 
    language: 'css', 
    code: `/* Element Selector */
p {
  color: blue;
}

/* Class Selector (it is used to select by class_name. (dot class_name)) */
.class-name {
  color: green;
}

/* ID Selector (it is used to select by id of a tag. (hashtag id)) */
#id-name {
  color: red;
}` 
  },
    { 
    title: 'CSS Properties', 
    explanation: 'CSS properties are used to apply styles to the selected elements. Here are some examples of common properties:', 
    language: 'css', 
    code: `/* Color Property */
p {
  color: blue;
}

/* Font Size Property */
p {
  font-size: 16px;
}

/* Background Color Property */
p {
  background-color: yellow;
}` 
  },
    { 
    title: 'CSS Colors', 
    explanation: 'This is a basic JavaScript function that logs a message to the console.', 
    language: 'css', 
    code: `/* Color by Name */
p {
  color: red;
}

/* Color by HEX */
p {
  color: #ff0000;
}

/* Color by RGB */
p {
  color: rgb(255, 0, 0);
}` 
  },
    { 
    title: 'CSS Box Model', 
    explanation: 'The box model represents the structure of an element as a rectangular box composed of the content, padding, border, and margin.', 
    language: 'css', 
    code: `div {
  width: 300px;
  padding: 20px;
  border: 10px solid black;
  margin: 30px;
 }` 
  },
    { 
    title: 'CSS Text Formatting', 
    explanation: 'CSS allows you to style text in various ways, including font size, font style, text alignment, text decoration, and more.', 
    language: 'css', 
    code: `p {
  font-size: 16px;
  font-style: italic;
  text-align: center;
  text-decoration: underline;
 }` 
},
  ]

const CssTutorial = () => {
  return (
<>
<main className="mx-auto w-3/4 bg-white p-6">
<section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Introduction to CSS</h2>
        <p className="mb-4 text-lg">
          CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML or XML. CSS describes how elements should be rendered on screen, on paper, or in other media.
          (in short it is used for styling web page)
        </p>
      </section>
<div style={{ padding: '20px' }}>
        {css.map((css, index) => (
      <div key={index} style={{ marginBottom: '20px' }}>
      <h2 className='text-2xl font-bold mb-4'>{css.title}</h2>
           <p className='mb-4 text-lg'>{css.explanation}</p>
          <CodeBlock language={css.language} code={css.code} />
        </div>
       ))}
  </div>
  </main>
</>
  );
};

export default CssTutorial;
