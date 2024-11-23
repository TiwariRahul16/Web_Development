// pages/tailwind-tutorial.js
import React from 'react';
import CodeBlock from '../components/CodeBlock';

const tailwindcss = [
    { 
        title: 'Utility Classes', 
        explanation: `Utility classes are single-purpose classes that you can use to style individual elements.`, 
        language: 'tailwindcss', 
        code: `<div class="bg-blue-500 text-white p-4">This is a blue box</div>
<div class="text-center text-gray-700">Centered text</div>` 
      },
    { 
    title: 'Responsive Design', 
    explanation: 'Tailwind provides utility classes to create responsive designs easily.', 
    language: 'tailwindcss', 
    code: `<div class="md:flex">
  <div class="md:w-1/2 p-4 bg-green-200">Left Column</div>
  <div class="md:w-1/2 p-4 bg-green-400">Right Column</div>
  </div>` 
  },
    { 
    title: 'Flexbox', 
    explanation: `Tailwind includes a comprehensive set of flexbox utilities.`, 
    language: 'tailwindcss', 
    code: `<div class="flex">
  <div class="flex-1 p-4 bg-red-200">Flex Item 1</div>
  <div class="flex-1 p-4 bg-red-400">Flex Item 2</div>
  </div>` 
  },
  { 
    title: 'Grid System', 
    explanation: `Tailwind's grid system is based on CSS Grid Layout.`, 
    language: 'tailwindcss', 
    code: `<div class="grid grid-cols-3 gap-4">
  <div class="bg-blue-200 p-4">Grid Item 1</div>
  <div class="bg-blue-400 p-4">Grid Item 2</div>
  <div class="bg-blue-600 p-4">Grid Item 3</div>
</div>` 
  },
    { 
    title: 'Typography', 
    explanation: 'Tailwind offers a variety of typography utilities to style text.', 
    language: 'tailwindcss', 
    code: `<h1 class="text-4xl font-bold text-blue-500">Heading 1</h1>
<p class="text-lg text-gray-700">This is a paragraph with large text.</p>
<a href="#" class="text-green-500 underline">This is a link</a>` 
  },
    { 
    title: 'Spacing', 
    explanation: 'Tailwind provides margin and padding utilities to control spacing.', 
    language: 'tailwindcss', 
    code: `<div class="m-4 p-4 bg-yellow-200">This box has margin and padding</div>` 
  },
    { 
    title: 'Animations', 
    explanation: 'Tailwind provides a set of utility classes to control animations.', 
    language: 'tailwindcss', 
    code: `<div class="animate-bounce p-4 bg-purple-400">Bouncing Box</div>` 
  },
    { 
    title: 'Transitions', 
    explanation: 'Tailwind includes utilities to control transitions and animations.', 
    language: 'tailwindcss', 
    code: `<button class="bg-blue-500 text-white p-2 rounded-lg transition duration-300 ease-in-out hover:bg-blue-700">
  Hover me
  </button>` 
  },
    { 
    title: 'Shadows', 
    explanation: 'Tailwind offers shadow utilities to apply shadows to elements.', 
    language: 'tailwindcss', 
    code: `<div class="shadow-lg p-4 bg-white">Large Shadow</div>` 
  },
    { 
    title: 'Borders', 
    explanation: 'Tailwind includes a variety of border utilities to style borders.', 
    language: 'tailwindcss', 
    code: `<div class="border-4 border-dashed border-gray-500 p-4">Dashed Border</div>` 
  },
    { 
    title: 'Backgrounds', 
    explanation: 'Tailwind provides utilities for background colors, gradients, and images.', 
    language: 'tailwindcss', 
    code: `<div class="bg-gradient-to-r from-teal-400 to-blue-500 p-4 text-white">Gradient Background</div>` 
  },
    { 
    title: 'Customizing Tailwind', 
    explanation: 'Tailwind can be customized by modifying the tailwind.config.js file.', 
    language: 'tailwindcss', 
    code: `module.exports = {
  theme: {
    extend: {
        colors: {
        'custom-blue': '#1c3d5a',
        },
        },
        },
        plugins: [],
        }` 
  },
  ]

const TailwindTutorial = () => {
  return (<> 
    <main className="mx-auto w-3/4 bg-white p-6">
    <h1 className="text-3xl font-bold mb-6">Tailwind CSS Tutorial</h1>

{/* Introduction to Tailwind CSS */}
<section className="mb-8">
  <h2 className="text-2xl font-bold mb-4">Introduction to Tailwind CSS</h2>
  <p className="mb-4">
    Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without having to write a lot of custom CSS. It provides low-level utility classes to build complex designs.
  </p>
</section>
<div style={{ padding: '20px' }}>
        {tailwindcss.map((tailwindcss, index) => (
      <div key={index} style={{ marginBottom: '20px' }}>
      <h2 className='text-2xl font-bold mb-4'>{tailwindcss.title}</h2>
           <p className='mb-4 text-lg'>{tailwindcss.explanation}</p>
          <CodeBlock language={tailwindcss.language} code={tailwindcss.code} />
        </div>
       ))}
  </div>
  </main>
        </>
  );
};

export default TailwindTutorial;
