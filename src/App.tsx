import React from 'react';
import './style.css';
import BrowseBooks from './components/BrowseBooks';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowseBooks />
      <Footer />
    </div>
  );
}

export default App;
