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
      `}</style>
      <Header />
      <AdSection />
      <Body />
    </div>
  );
}

export default App;
