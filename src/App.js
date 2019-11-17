import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
  <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>

            <li>
              <NavLink to='/our-history' activeStyle={{color: 'red'}}>History</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
        <Route path='/' exact>
            <Home />
          </Route>
        <Route path='/our-history' exact>
            <History />
         </Route>
        </Switch>
      </div>
  </Router>
  );
}

function Home() {
  return <h2>Welcome to Home</h2>
}

function History() {
  return <h2>Our History</h2>
}
