import { Component } from "react";
import Comment from "./components/Comment"
import HomePage from "./pages/HomePage"
import AuthenticationPage from "./pages/AuthenticationPage"
import ShopPage from "./pages/ShopPage"
import TrackerPage from "./pages/TrackerPage"


function App() {
  return (
    <div className="App">
     <HomePage />
     <ShopPage />
     <TrackerPage />
     <AuthenticationPage />
    </div>
  );
}

export default App;
