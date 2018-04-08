import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FoodList from './containers/food-list';
import FavList from './containers/fav-list';
import DetailList from './containers/detail-list';
import { Tab, Tabs } from 'react-bootstrap';
import { Route, Link, BrowserRouter as Router, } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  render() {
    return (
      <Router>
        <div style={{ width: 1000, margin: '0 auto' }}>
          <Link to="/">Home</Link> &nbsp; &nbsp;
          <Link to="/favorites">Favorites</Link>
          <hr />
          <Route exact path="/" component={FoodList} />
          <Route exact path="/:id" component={DetailList} />
          <Route exact path="/favorites" component={FavList} />
        </div>
      </Router>
      /* <Tabs defaultActiveKey={1} id="tab">
          <Tab eventKey={1} title="Search">
            <FoodList />
          </Tab>
          <Tab eventKey={2} title="Favorites">
            <FavList />
          </Tab>  
    </Tabs> */

    );
  }
}
export default App;