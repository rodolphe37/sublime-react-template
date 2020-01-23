import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Works from './components/Works';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import PhotoswipeBackground from './components/PhotoswipeBackground';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Preloader />
      <Header />
      <Home />
      <About />
      <Services />
      <Works />
      <Clients />
      <Testimonials />
      <Footer />
      <PhotoswipeBackground />
    </div>
  );
}

export default App;
