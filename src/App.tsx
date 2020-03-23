import React from "react";
import "./App.css";
import { Switch, Route } from "react-router";
import HomePage from "./components/HomePage/HomePage";
import Test from "./components/Test/Test";

const App: React.FC = () => {
  return (
    <div className="App">
      <div>Hi from app</div>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/test" exact component={Test} />
      </Switch>
    </div>
  );
};

export default App;
