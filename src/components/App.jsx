import React from 'react';
// import ReactDOM from 'react-dom';
import Body from './Body';
import Header from './Header';
import AdSection from './AdSection';

function App() {
  return (
    <div>
      <style jsx>{`
          background: darkgray;
          display: flex;
          flex-direction: column;
          font-family: 'Open Sans', sans-serif;
      `}</style>
      <Header />
      <AdSection />
      <Body />
    </div>
  );
}

export default App;
