import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ListDoggos from "./components/ListDoggos";
import SearchDoggos from "./components/SearchDoggos";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <header className="App-header">
          <Route exact path="/" component={ListDoggos} />
          <Route exact path="/search" component={SearchDoggos} />
        </header>
      </Router>
    </div>
  );
}

export default App;
