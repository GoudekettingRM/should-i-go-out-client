import React from "react";
import { connect } from "react-redux";
import { AppState } from "../../store/rootReducer";
import { RouteComponentProps } from "react-router-dom";
import { Dispatch, bindActionCreators } from "redux";
import { setCurrentQuestionActionCreator } from "../../store/questions/actions";
import Button from "react-bootstrap/Button";
import { FormattedMessage } from "react-intl";
import { Answer } from "../../types/answer";

interface AnswerProps extends RouteComponentProps {}

type Props = AnswerProps & LinkStateProps & LinkDispatchProps;

const AnswerContainer: React.FC<Props> = ({
  answer,
  history,
  setCurrentQuestion
}) => {
  const restartTest = (): void => {
    setCurrentQuestion(1);
    history.push("/test");
  };

  if (!answer.conclusion) {
    history.push("/");
    return (
      <div>
        <FormattedMessage id="app.redirectToHome" />
      </div>
    );
  }

  return (
    <div className="pageContent">
      <h3>{answer.conclusion}</h3>
      <p>{answer.explanation}</p>
      <Button onClick={restartTest}>
        <FormattedMessage id="app.retryButton" />
      </Button>
    </div>
  );
};

interface LinkStateProps {
  answer: Answer;
}
interface LinkDispatchProps {
  setCurrentQuestion: (questionNumber: number) => void;
}

const mapStateToProps = (state: AppState) => ({
  answer: state.conclusions.drawn
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCurrentQuestion: bindActionCreators(
    setCurrentQuestionActionCreator,
    dispatch
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(AnswerContainer);
