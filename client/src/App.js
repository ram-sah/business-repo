import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
// import SearchResult from "./components/SearchResult"
import Categories from "./pages/Categories";
import Business from "./pages/Business"
// import Nav from "./components/Nav";
import Home from './pages/Home';
import Footer from './components/Footer'
// import Reports from './pages/Reports';
// import Products from './pages/Products';
// import Discover from "./pages/Discover";
// import About from "./pages/About";
// import Search from "./pages/Search";
// import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Sidebar from "./components/Sidebar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Sidebar />
        {/* <Nav /> */}
      <Switch>
          {/* <Route exact path="/" component={Categories}/>
          <Route path="/business" component={Business}/> */}
          <Route path='/' exact component={Home} />
          <Route path='/categories' component={Categories} />
          <Route path='/business' component={Business} />
          <Route path='/footer' component={Footer} />
          {/* <Route exact path="/" component={About} /> */}
          {/* <Route exact path="/about" component={About} /> */}
          {/* <Route exact path="/discover" component={Discover} /> */}
          {/* <Route exact path="/search" component={Search} /> */}
          </Switch>
        </Router>
       <Footer />
       </div>
    );
  }
}

export default App;


