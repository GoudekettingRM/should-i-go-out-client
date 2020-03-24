import React from "react";
import { connect } from "react-redux";
import { AppState } from "../../store/rootReducer";
import { RouteComponentProps } from "react-router-dom";
import { Dispatch, bindActionCreators } from "redux";
import { setCurrentQuestion } from "../../store/questions/actions";

interface AnswerProps extends RouteComponentProps {}

type Props = AnswerProps & LinkStateProps & LinkDispatchProps;

const Answer: React.FC<Props> = ({ answer, history, setCurrentQuestion }) => {
  const restartTest = (): void => {
    setCurrentQuestion(1);
    history.push("/test");
  };

  if (!answer) {
    history.push("/");
    return <div>Terug naar home...</div>;
  }

  return (
    <div>
      <h1>{answer}</h1>
      <button onClick={restartTest}>Check opnieuw.</button>
    </div>
  );
};

interface LinkStateProps {
  answer: string;
}
interface LinkDispatchProps {
  setCurrentQuestion: (questionNumber: number) => void;
}

const mapStateToProps = (state: AppState) => ({
  answer: state.answer
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCurrentQuestion: bindActionCreators(setCurrentQuestion, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Answer);
