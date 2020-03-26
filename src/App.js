import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import TopComponent from './components/TopComponent/TopComponent';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';


function App() {
  return (
    <Fragment>
      <TopComponent />
      <Navbar />
      <Switch>
        <Route exact path='/' component={LandingPage} />
      </Switch>
    </Fragment>
  );
}

export default App;
