// eslint-disable-next-line
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// import ViewEvent from './components/ViewEvent/ViewEvent';
import NotFound from './pages/NotFound/NotFound';
import HomePage from './pages/HomePage/HomePage';




function App() {

  return (
    <Router>
      <main>
        <Switch>
          <Route path="/" exact component={HomePage} />
          {/* <Route path="/about" exact component={HomePage} />
          <Route path="/contact" exact component={HomePage} />
          <Route path="/invest" exact component={HomePage} /> */}
          <Route component={NotFound}/>
        </Switch>
      </main>
    </Router>
  );
}


export default App;
