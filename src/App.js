import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import TopComponent from './components/TopComponent/TopComponent';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import Shop from './components/Shop/Shop';

import Categories from './components/Shop/Categories/Categories'

function App() {
  return (
    <Fragment>
      <TopComponent />
      <Navbar />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/mac' component={Shop} />
        {/* <Route exact path='/categories' component={Categories} /> */}
      </Switch>
    </Fragment>
  );
}

export default App;
