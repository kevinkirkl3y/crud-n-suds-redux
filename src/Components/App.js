import React from 'react';
import Header from './Header';
import Footer from './Footer';
import KegControl from './KegControl';


function App() {
  return (
    <>
      <div className="app">
        <Header />
        <KegControl />
        <Footer />
      </div>
    </>
  );
}

export default App;
