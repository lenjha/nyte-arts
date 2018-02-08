import React from 'react';
import About from './About';
import Artwork from './Artwork';
import Body from './Body';
import Contact from './Contact';
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
        <Route path='/contact' component={Contact}/>
        <Route path='/Artwork' component={Artwork}/>
      </Switch>
      <Body />
    </div>
  );
}

export default App;
