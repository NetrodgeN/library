import React from 'react';
import './style.css';
import BrowseBooks from "./components/BrowseBooks";
import Header from "./components/Header";


function App() {

  return (
    <div className="App">
        <Header/>

        <BrowseBooks />
        {/*<Footer/>*/}
    </div>
  );
}

export default App;
