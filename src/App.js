import "./App.css";
import React, { createContext, useContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Orders from "./Components/Orders/Orders";
import Login from "./Components/Login/Login";
import Deals from "./Components/Deals/Deals";
import Admin from "./Components/Admin/Admin";
import Checkout from "./Components/Checkouts/Checkout";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={ [loggedInUser, setLoggedInUser] } >
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light menubar">
            <div className="container">
              <Link className="navbar-brand menubar-logo" to="/">
                <span>Laptop Village</span>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link className="nav-link active" aria-current="page" to="/">
                    <span className="menu">Home</span>
                  </Link>
                  <Link className="nav-link" to="/orders">
                    <span className="menu">Orders</span>
                  </Link>
                  <Link className="nav-link" to="/admin">
                    <span className="menu">Admin</span>
                  </Link>
                  <Link
                    className="nav-link" to="/deals">
                    <span className="menu">Deals</span>
                  </Link>
                  <Link
                    className="nav-link" to="/login">
                    <span className="menu">Login</span>
                  </Link>
                </div>
              </div>
            </div>
          </nav>


          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute path="/orders">
              <Orders />
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <Route path="/deals">
              <Deals />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/checkout/:_id">
              <Checkout/>
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
