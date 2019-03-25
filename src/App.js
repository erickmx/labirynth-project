import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUpload,
  faPlus,
  faMap,
  faUserSecret,
  faPlay,
  faMapMarked
} from "@fortawesome/free-solid-svg-icons";

import React, { Component } from "react";
import "./App.scss";
import { Provider } from "mobx-react";
import { Modal } from "./containers";
import stores from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FormMap, FormEntity } from "./components";
import { Map } from "./containers";

library.add(faUpload, faPlus, faMap, faUserSecret, faPlay, faMapMarked);

class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <Router>
          <Switch>
            <Route exact path="/" component={Modal} />
            <Route exact path="/FormMap" component={FormMap} />
            <Route exact path="/FormEntity" component={FormEntity} />
            <Route exact path="/game" component={Map} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
