import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import TopComponent from './components/TopComponent/TopComponent';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import Shop from './components/Shop/Shop';

import Categories from './components/Shop/Categories/Categories'

import ProductDetailView from './components/Shop/ProductDetailView/ProductDetailView'
import AboutUs from './components/GeneralInfoComponents/AboutUs/AboutUs'

function App() {
  return (
    <Fragment>
      <TopComponent />
      <Navbar />
      <Switch>
        <Route exact path='/' component={LandingPage} /> */}
        <Route exact path='/mac' component={Shop} />
        <Route exact path='/details' component={ProductDetailView} />
        <Route exact path='/about' component={AboutUs} />
      </Switch>
      {/* <Shop initalCategory='Laptops' />
      {/* <Test width='500px' height='500px' /> */}

    </Fragment>
  );
}

export default App;
