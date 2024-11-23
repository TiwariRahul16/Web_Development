// pages/html-tutorial.js
import React from 'react';
import CodeBlock from '../components/CodeBlock';

const html = [
    { 
        title: 'HTML Elements', 
        explanation: `HTML documents are made up of elements. An HTML element usually consists of a 'start tag' and an 'end tag', with the content inserted in between.`, 
        language: 'html', 
        code: `<p>This is a paragraph.</p>
  <div>Hii i am div</div>  
  <img src="mango.png" alt="Mango" />   //image tag used to display image in src give image path
  <pre>hi.. 
    I am pre tag.
    I do not ignore the spaces and display same para on webpage. 
  </pre>
  <a href="www.google.com">Google</a>    // anchor tag it is used to redirect to another page` 
      },
    { 
    title: 'HTML Attributes', 
    explanation: ' Attributes provide additional information about HTML elements. Attributes are always included in the start tag and usually come in name/value pairs like: name="value".', 
    language: 'html', 
    code: ` //name="value" like: href="https://www.example.com"
    <a href="https://www.example.com">This is a link</a>` 
  },
    { 
    title: 'HTML Headings', 
    explanation: `HTML headings are defined with the <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> tags.`, 
    language: 'html', 
    code: `<h1>This is a heading 1</h1>
<h2>This is a heading 2</h2>
<h3>This is a heading 3</h3>
<h4>This is a heading 4</h4>
<h5>This is a heading 5</h5>
<h6>This is a heading 6</h6>` 
  },
    { 
    title: 'HTML Lists', 
    explanation: 'HTML lists allow web developers to group a set of related items in lists.', 
    language: 'html', 
    code: `<ul>
  <li>Unordered list item 1</li>
  <li>Unordered list item 2</li>
</ul>
<ol>
  <li>Ordered list item 1</li>
  <li>Ordered list item 2</li>
</ol>` 
  },
    { 
    title: 'HTML Tables', 
    explanation: 'HTML tables are used to display tabular data.', 
    language: 'html', 
    code: `<table>
  <tr>
  <th>Header 1</th>
  <th>Header 2</th>
  </tr>
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
  </tr>
</table>` 
  },
  ]

const HtmlTutorial = () => {
  return (<>
    <main className="mx-auto w-3/4 bg-white p-6">
    <h1 className="text-3xl font-bold mb-6">HTML Tutorial</h1>
      {/* Introduction to HTML */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Introduction to HTML</h2>
        <p className="mb-4 text-lg">
          HTML (HyperText Markup Language) is the standard markup language for creating web pages. It is the backbone of any web application and it structures content on the web.
        </p>
      </section>
<div style={{ padding: '20px' }}>
        {html.map((html, index) => (
      <div key={index} style={{ marginBottom: '20px' }}>
      <h2 className='text-2xl font-bold mb-4'>{html.title}</h2>
           <p className='mb-4 text-lg'>{html.explanation}</p>
          <CodeBlock language={html.language} code={html.code} />
        </div>
       ))}
  </div>
  </main>
  </>
  );
};

export default HtmlTutorial;
