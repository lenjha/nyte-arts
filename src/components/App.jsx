import React from 'react';
// import ReactDOM from 'react-dom';
import About from './About';
import Body from './Body';
import Header from './Header';
import AdSection from './AdSection';
import { Route, Switch } from 'react-router-dom';

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
      <Switch>
        <Route path='/about' component={About}/>
      </Switch>
      <Body />
    </div>
  );
}

export default App;
