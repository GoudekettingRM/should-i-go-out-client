import React from "react";
import "./App.css";
import { Switch, Route } from "react-router";
import HomePage from "./components/HomePage/HomePage";

const App: React.FC = () => {
  return (
    <div className="App">
      <div>Hi from app</div>
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
