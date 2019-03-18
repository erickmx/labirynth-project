import React, { Component } from "react";
import "./App.scss";
import { Provider } from "mobx-react";
import { Map } from "./containers";
import {Navigation} from "./components/Navigation"
import stores from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FormMap, FormEntity } from "./components"

class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <Router>
          <Switch>
            <Route exact path="/" component={FormMap}/>
            <Route exact path="/Navigation" component={Navigation}></Route>
            <Route exact path="/FormMap" component={FormMap}></Route>
            <Route exact path="/FormEntity" component={FormEntity}></Route>
          </Switch> 
        </Router>
      </Provider>
    );
  }
}

export default App;
