import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { setCurrentQuestion } from "../../store/questions/actions";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";

interface HomePageProps extends RouteComponentProps {}

type Props = HomePageProps & LinkDispatchProps;

const HomePage: React.FC<Props> = props => {
  const startTest = (): void => {
    console.log("Starting test!");

    props.setCurrentQuestion(1);
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

interface LinkDispatchProps {
  setCurrentQuestion: (questionNumber: number) => void;
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCurrentQuestion: bindActionCreators(setCurrentQuestion, dispatch)
});

export default connect(null, mapDispatchToProps)(HomePage);
