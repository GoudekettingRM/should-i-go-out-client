import React from "react";
import "./App.css";
import { Switch, Route } from "react-router";
import HomePage from "./components/HomePage/HomePage";
import Test from "./components/Test/Test";
import AnswerContainer from "./components/Answer/Answer";

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/test" exact component={Test} />
        <Route path="/answer" exact component={AnswerContainer} />
      </Switch>
    </div>
  );
};

export default App;
