import React, { Component } from 'react';
import './App.css';
import SearchPanelComponent from './containers/SearchPanelComponent';
import  FavListComponent  from './containers/FavListComponent';
import DetailComponent from './containers/DetailComponent';
import { Route, Link, BrowserRouter as Router, } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  render() {
    return (
      <Router>
         <div>
            <Route exact path="/" component={SearchPanelComponent} />
            <Route exact path="/home/favorites" component={FavListComponent} />
            <Route exact path="/:id" component={DetailComponent} />
          </div>
      </Router>
    );
  }
}
export default App;