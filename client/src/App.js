import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Categories from "./pages/Categories";
import Businesses from "./pages/Business"

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <Router>
          <Route exact path="/" component={Categories}/>
          <Route exact path="/business/:id" component={Businesses}/>
        </Router>


      </div>
    );
  }
}

export default App;
