import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Products from './components/products';
import Cart from './components/cart';
import NotFound from './components/nofound'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import configureStore from './store';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const routing = (
    <Router>
      <div>
          
        <Route path="/productList" component={Products} />
        <Route path="/login" component={App} />
        <Route path="/cart/:id" component={Cart} />

        
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));
//serviceWorker.unregister();
// <Provider store={configureStore()}></Provider>,