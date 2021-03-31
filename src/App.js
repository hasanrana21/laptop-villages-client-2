import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Orders from "./Components/Orders/Orders";
import Login from "./Components/Login/Login";
import Deals from "./Components/Deals/Deals";
import Admin from "./Components/Admin/Admin";
import Checkout from "./Components/Checkouts/Checkout";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <Link className="navbar-brand" to="/">
                Laptop Village
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
                    Home
                  </Link>
                  <Link className="nav-link" to="/orders">
                    Orders
                  </Link>
                  <Link className="nav-link" to="/admin">
                    Admin
                  </Link>
                  <Link
                    className="nav-link" to="/deals">
                    Deals
                  </Link>
                  <Link
                    className="nav-link" to="/login">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          <hr />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/orders">
              <Orders />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/deals">
              <Deals />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/checkout">
              <Checkout/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
