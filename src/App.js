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
import Authorization from './components/Authorization/Authorization'
import ForgotPassword from './components/ForgotPassword/ForgotPassword'
import Registration from './components/Registration/Registration'
import ShoppingCart from './components/ShoppingCart/ShoppingCart'



function App() {
  return (
    <Fragment>
      <TopComponent />
      <Navbar />
      <Switch>
        <Route exact path='/' component={LandingPage} /> */}
        <Route path='/shop/:category' component={(props) => <Shop {...props} key={window.location.pathname} />} />
        <Route exact path='/details' component={(props) => <ProductDetailView {...props} key={window.location.pathname} />} />
        <Route exact path='/about_us' component={AboutUs} />
        <Route exact path='/customer_service' component={CustomerService} />
        <Route exact path='/shipping_delivery' component={ShippingDelivery} />
        <Route exact path='/secure_payment' component={SecurePayment} />
        <Route exact path='/contact_us' component={ContactUs} />
        <Route exact path='/authorization' component={Authorization} />
        <Route exact path='/forgotPass' component={ForgotPassword} />
        <Route exact path='/registration' component={Registration} />
        <Route exact path='/cart' component={ShoppingCart} />

      </Switch>
      {/* <Shop initalCategory='Laptops' />
      {/* <Test width='500px' height='500px' /> */}

    </Fragment>
  );
}

export default App;
