import React from 'react';
import About from '../About';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Project></Project>
        <Contact></Contact>
        <Resume></Resume>
      </main>
      <Footer></Footer>
    </div>
  )
}