import React from "react";
import { RouteComponentProps } from "react-router-dom";

interface HomePageProps extends RouteComponentProps {}

const HomePage: React.FC<HomePageProps> = props => {
  const startTest = (): void => {
    console.log("Starting test!");

    props.history.push("/test");
  };

  return (
    <div>
      <h1>Welcome to Should-I-Go-Out?</h1>
      <button type="button" onClick={startTest}>
        I want to go out, but should I? Again?
      </button>
    </div>
  );
};

export default HomePage;
