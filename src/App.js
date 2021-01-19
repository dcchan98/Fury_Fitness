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
