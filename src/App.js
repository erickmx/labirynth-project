import React, { Component } from "react";
import "./App.scss";
import { Provider } from "mobx-react";
import { Map } from "./containers";
import stores from "./store";

class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <Map />
      </Provider>
    );
  }
}

export default App;
