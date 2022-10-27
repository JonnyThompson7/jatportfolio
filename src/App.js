import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio'
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer'
import Nav from './components/Nav'

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <main>
        <About></About>
        <Portfolio></Portfolio>
        <Contact></Contact>
        <Resume></Resume>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App;
