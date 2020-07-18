import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Shop from "./components/Shop";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemDetail from "./components/ItemDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:ids" component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}
function Home() {
  return (
    <div>
      <h1>Welcome Home</h1>
    </div>
  );
}

export default App;
