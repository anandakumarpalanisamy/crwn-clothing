import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import Header from './components/header/header.component.jsx';

const App = () => {

  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/signin" render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
        <Route exact path="/checkout" component={CheckoutPage} />
      </Switch>
    </div>
  );

}

export default App;
