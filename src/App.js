import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import TopComponent from './components/TopComponent/TopComponent';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import Shop from './components/Shop/Shop';

import Categories from './components/Shop/Categories/Categories'

import ProductDetailView from './components/Shop/ProductDetailView/ProductDetailView'
import AboutUs from './components/GeneralInfoComponents/AboutUs/AboutUs'
import CustomerService from './components/GeneralInfoComponents/CustomerService/CustomerService'
import ShippingDelivery from './components/GeneralInfoComponents/ShippingDelivery/ShippingDelivery'
import SecurePayment from './components/GeneralInfoComponents/SecurePayment/SecurePayment'
import ContactUs from './components/GeneralInfoComponents/ContactUs/ContactUs'



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
        <Route exact path='/customerService' component={CustomerService} />
        <Route exact path='/shipping' component={ShippingDelivery} />
        <Route exact path='/securePayment' component={SecurePayment} />
        <Route exact path='/contact' component={ContactUs} />
      </Switch>
      {/* <Shop initalCategory='Laptops' />
      {/* <Test width='500px' height='500px' /> */}

    </Fragment>
  );
}

export default App;
