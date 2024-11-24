import React from 'react'

const javascript = () => {
  return (
    <>
    <html>
<body class="bg-gray-100">
    <div class="flex flex-col min-h-screen">
        <header class="bg-white shadow">
            <div class="container mx-auto px-4 py-2 flex justify-between items-center">
                <div class="flex items-center">
                    <div class="text-green-600 text-2xl font-bold">W3</div>
                    <div class="text-gray-600 text-xl">schools</div>
                </div>
                <nav class="flex space-x-4">
                    <a href="#" class="text-gray-600 hover:text-gray-900">Tutorials</a>
                    <a href="#" class="text-gray-600 hover:text-gray-900">Exercises</a>
                    <a href="#" class="text-gray-600 hover:text-gray-900">Certificates</a>
                    <a href="#" class="text-gray-600 hover:text-gray-900">Services</a>
                    <a href="#" class="text-gray-600 hover:text-gray-900">Plus</a>
                    <a href="#" class="text-gray-600 hover:text-gray-900">For Teachers</a>
                    <a href="#" class="text-gray-600 hover:text-gray-900">Spaces</a>
                    <a href="#" class="text-gray-600 hover:text-gray-900">Get Certified</a>
                </nav>
                <div class="flex items-center space-x-4">
                    <input type="text" placeholder="Search..." class="border rounded px-2 py-1"/>
                    <i class="fas fa-user-circle text-gray-600 text-2xl"></i>
                </div>
            </div>
        </header>

        
        <div class="container mx-auto flex flex-1">
           
            <aside class="w-1/4 bg-gray-200 p-4">
                <h2 class="text-lg font-bold mb-4">Java Tutorial</h2>
                <ul class="space-y-2">
                    <li><a href="#" class="block text-green-600 font-bold">Java HOME</a></li>
                    <li><a href="#" class="block text-gray-700">Java Intro</a></li>
                    <li><a href="#" class="block text-gray-700">Java Get Started</a></li>
                    <li><a href="#" class="block text-gray-700">Java Syntax</a></li>
                    <li><a href="#" class="block text-gray-700">Java Output</a></li>
                    <li><a href="#" class="block text-gray-700">Java Comments</a></li>
                    <li><a href="#" class="block text-gray-700">Java Variables</a></li>
                    <li><a href="#" class="block text-gray-700">Java Data Types</a></li>
                    <li><a href="#" class="block text-gray-700">Java Type Casting</a></li>
                    <li><a href="#" class="block text-gray-700">Java Operators</a></li>
                    <li><a href="#" class="block text-gray-700">Java Strings</a></li>
                    <li><a href="#" class="block text-gray-700">Java Math</a></li>
                    <li><a href="#" class="block text-gray-700">Java Booleans</a></li>
                    <li><a href="#" class="block text-gray-700">Java If...Else</a></li>
                    <li><a href="#" class="block text-gray-700">Java Switch</a></li>
                    <li><a href="#" class="block text-gray-700">Java While Loop</a></li>
                    <li><a href="#" class="block text-gray-700">Java For Loop</a></li>
                    <li><a href="#" class="block text-gray-700">Java Break/Continue</a></li>
                    <li><a href="#" class="block text-gray-700">Java Arrays</a></li>
                </ul>
                <h2 class="text-lg font-bold mt-6 mb-4">Java Methods</h2>
                <ul class="space-y-2">
                    <li><a href="#" class="block text-gray-700">Java Methods</a></li>
                    <li><a href="#" class="block text-gray-700">Java Method Parameters</a></li>
                </ul>
            </aside>
            <main class="w-3/4 bg-white p-6">
                <h1 class="text-2xl font-bold mb-4">Examples in Each Chapter</h1>
                <p class="mb-4">Our &quot;Try it Yourself&quot; editor makes it easy to learn Java. You can edit Java code and view the result in your browser.</p>
                <div class="bg-gray-100 p-4 border rounded mb-4">
                    <h2 class="text-xl font-bold mb-2">Example</h2>
                    <pre class="bg-white p-4 border rounded">
<code class="text-sm">
{/* public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
} */}
</code>
                    </pre>
                    <button class="bg-green-600 text-white px-4 py-2 rounded mt-2">Try it Yourself »</button>
                </div>
                <p class="text-gray-700">Click on the &quot;Run example&quot; button to see how it works.</p>
                <div class="bg-yellow-100 p-4 border rounded mt-4">
                    <p>We recommend reading this tutorial, in the sequence listed in the left menu.</p>
                    <p>Java is an object oriented language and some concepts may be new. Take breaks when needed, and go over the examples as many times as needed.</p>
                </div>
            </main>
        </div>
    </div>
</body>
</html>
    </>
  )
}

export default javascript


// import React from 'react';
// import CodeBlock from "./components/CodeBlock";

// const topics = [
//   { 
//     title: 'JavaScript Function', 
//     explanation: 'This is a basic JavaScript function that logs a message to the console.', 
//     language: 'javascript', 
//     code: `const snippet1 = () => { 
//       console.log('This is snippet 1'); 
//       };` 
//   },
//   { 
//     title: 'Python Function', 
//     explanation: 'This is a basic Python function that prints a message.', 
//     language: 'python', 
//     code: `def snippet2():\n    print("This is snippet 2")` 
//   },
//   { 
//     title: 'C++ Program', 
//     explanation: 'This is a basic C++ program that prints a message to the console.', 
//     language: 'cpp', 
//     code: `#include <iostream>\nint main() { std::cout << "This is snippet 3"; return 0; }` 
//   },
//   { 
//     title: 'Java Program', 
//     explanation: 'This is a basic Java program that prints a message.', 
//     language: 'java', 
//     code: `public class Snippet4 { public static void main(String[] args) { System.out.println("This is snippet 4"); } }` 
//   },
//   // Add more topics as needed
// ];

// export default function Home2() {
//   return (
//     <div style={{ padding: '20px' }}>
//       {topics.map((topic, index) => (
//         <div key={index} style={{ marginBottom: '20px' }}>
//           <h2>{topic.title}</h2>
//           <p>{topic.explanation}</p>
//           <CodeBlock language={topic.language} code={topic.code} />
//         </div>
//       ))}
//     </div>
//   );
// }




