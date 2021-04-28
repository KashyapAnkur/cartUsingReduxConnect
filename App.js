import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingCart from './28April/Assignment/ShoppingCart';
import Cart from './28April/Assignment/Cart';
import Header from './28April/Assignment/Header';

function App() {

  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={(() => {
          return (
            <>
              <Header />
              <ShoppingCart />
            </>
          )
        })} />
        <Route exact path="/cart" render={(() => {
          return (
            <>
              <Header />
              <Cart />
            </>
          )
        })} />
      </Switch>
    </BrowserRouter>

    </div>
  );
}

export default App;
