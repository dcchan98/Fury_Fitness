import HomePage from "./pages/HomePage"
import AuthenticationPage from "./pages/AuthenticationPage"
import ShopPage from "./pages/ShopPage"
import TrackerPage from "./pages/TrackerPage"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
    // <div className="App">
    //  <HomePage />
    //  <ShopPage />
    //  <TrackerPage />
    //  <AuthenticationPage />
    // </div>   <Router>

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/authenticate">Log In</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/tracker">Tracker</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/authenticate">
            <AuthenticationPage />
          </Route>
          <Route path="/shop">
            <ShopPage />
          </Route>
          <Route path="/Tracker">
            <TrackerPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
