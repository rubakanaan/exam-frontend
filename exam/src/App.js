import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Favorite from './components/Favorite';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home'
class App extends React.Component {

  render() {
    return(
      <>
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/favorite">
              <Favorite/>
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App;
